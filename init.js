var workflow = new (require('events').EventEmitter)();
var async = require('async');
var prompt = require('prompt');

workflow.on('collectUserInput', function(){
  prompt.message = ''; prompt.delimiter = '';
  async.waterfall([function(cb){
    //2. mongo connection
    console.log('=====Setup MySql DB=====');
    var schema = {
      properties: {
        host: {
          description: 'Mysql host',
          type: 'string',                 // Specify the type of input to expect.
          default: 'localhost'
        },
        connection: {
          description: 'Connection Limit',
          type: 'number',
          default: 20
        },
        /*database: {
          description: 'My Sql database',
          type: 'string',
          default: 'yelpcamp'
        },*/
        user: {
          description: 'My Sql user',
          type: 'string',
          default: 'root'
        },
        password: {
          description: 'My Sql password',
          type: 'string',
          default: '',
          hidden: true
        }
      }
    };
    prompt.start();
    prompt.get(schema, function (err, result) {
      if(err){
        return cb(err);
      }
      workflow.mysql = {
        host: result.host,
        connection: result.connection,
        /*database: result.database,*/
        user: result.user? result.user: null,
        password: result.password? result.password: null
      };
      cb();
    });
  }/*, function(cb){
    //3. smtp email server and password
    console.log('=====(Optional) Set smtp server credential (to send notification email)=====');
    var schema = {
      properties: {
        email: {
          description: 'smtp username',
          default: workflow.admin.email
        },
        password: {
          description: 'smtp password',
          type: 'string',
          hidden: true
        },
        host: {
          description: 'smtp server host',
          type: 'string',
          default: 'smtp.gmail.com'
        }
      }
    };
    prompt.start();
    prompt.get(schema, function (err, result) {
      if(err){
        return cb(err);
      }
      workflow.smtp = {
        email:    result.email,
        password: result.password,
        host:     result.host
      };
      cb();
    });
  }*/], function(err, res) {
    if(err){
      console.log('Error collecting config info, please try again.');
      process.exit(-1);
    }
    //return workflow.emit('checkDbConnection');
    return workflow.emit('generateConfigJS');
  })
});


/*workflow.on('checkDbConnection', function(){
// Connection URL
//  var url = 'mongodb://localhost/angular-drwayll';
  var uri = ['mongodb://'];
  if(workflow.mysql.user && workflow.mysql.password){
    uri = uri.concat([workflow.mysql.user, ':', workflow.mysql.password, '@']);
  }
  uri = uri.concat([workflow.mysql.host, ':', workflow.mysql.port, '/', workflow.mysql.database]).join('');
  workflow.mysql.uri = uri;
  require('mongodb').MongoClient.connect(uri, function(err, db) {
    if(err){
      console.log('error connecting to db, please verify Mongodb setting then try again.');
      process.exit(-1);
    }else if(db){
      workflow.db = db;
    }
    return workflow.emit('initDb');
  });
});*/

// workflow.on('initDb', function(){
//   var db = workflow.db;
//   async.waterfall([function(cb){
//     // drop db if exists
//     db.dropDatabase(function(err, result){
//       return err? cb(err): cb();
//     });
//   }, function(cb){
//     // insert one admingroup doc
//     db.collection('admingroups').insert({ _id: 'root', name: 'Root' }, function(err, res){
//       return err? cb(err): cb();
//     });
//   }, function(cb){
//     // insert one admin doc
//     var admins = db.collection('admins');
//     admins.insert({ name: {first: 'Root', last: 'Admin', full: 'Root Admin'}, groups: ['root'] }, function(err, res){
//       return err? cb(err): cb();
//     });
//   }, function(cb){
//     // insert one account doc
//     db.collection('accounts').insert({isVerified: 'yes'}, function(err, res){
//       return err? cb(err): cb();
//     });
//   }, function(cb){
//     // encrypt password
//     var bcrypt = require('bcrypt');
//     bcrypt.genSalt(10, function(err, salt) {
//       if (err) {
//         return cb(err);
//       }
//       bcrypt.hash(workflow.admin.password, salt, function(err, hash) {
//         cb(err, hash);
//       });
//     });
//   }, function(hash, cb){
//     // insert one user doc
//     db.collection('admins').findOne(function(err, admin){
//       if(err) return cb(err);
//       db.collection('accounts').findOne(function(err, account) {
//         if(err) return cb(err);
//         var user = {
//           username: workflow.admin.username,
//           password: hash,
//           isActive: 'yes',
//           email: workflow.admin.email,
//           roles: {
//             admin: admin._id,
//             account: account._id
//           }
//         };
//         db.collection('users').insert(user, function(err, res){
//           return cb(err, admin._id, account._id);
//         });
//       });
//     });
//   }, function(adminId, accountId, cb){
//     //patch admin
//     db.collection('users').findOne(function(err, user){
//       if(err) {
//         return cb(err);
//       }
//       db.collection('admins').update({_id: adminId}, {$set: { user: { id: user._id, name: user.username } }}, function(err, res){
//         return cb(err, accountId, user);
//       });
//     });
//   }, function(accountId, user, cb){
//     //patch account
//     db.collection('accounts').update({_id: accountId}, {$set: { user: { id: user._id, name: user.username }}}, function(err, res){
//       return err? cb(err): cb();
//     });
//   }], function(err, result){
//     if(err){
//       console.log('error initializing mongodb, please try again.');
//       process.exit(-1);
//     }
//     return workflow.emit('generateConfigJS');
//   });
// });

workflow.on('generateConfigJS', function(){
  async.waterfall([
    function(cb){
      // retrieve config.example.js from file system
      require('fs').readFile('./databaseConnection/databaseConnection.example.js', {encoding: 'utf8'}, function(err, data){
        return err? cb(err): cb(null, data);
      });
    },
    function(content, cb){
      // find and replace with information collected
      //var smtpEnabled = !!workflow.smtp.password;
      var map = {
        '{{MY_SQL_CONNECTION_LIMIT}}': workflow.mysql.connection,
        /*'{{MYSQL_DB_NAME}}': workflow.mysql.database,*/
        '{{MYSQL_USER}}': workflow.mysql.user,
        '{{MYSQL_PASSWORD}}': workflow.mysql.password,
        '{{MYSQL_HOST}}': workflow.mysql.host
      };
      for(var key in map){
        if(map.hasOwnProperty(key)){
          content = content.replace(new RegExp(key, 'g'), map[key]);
        }
      }
      cb(null, content);
    },
    function(content, cb){
      // output config.js back to filesystem
      require('fs').writeFile('./databaseConnection/databaseConnection.js', content, function(err, res){
        return err? cb(err): cb();
      });
    }
  ], function(err, result){
    if(err){
      console.log('error generating databaseConnection.js.');
      process.exit(-1);
    }
    return workflow.emit('generateCreateDBJS');
  });
});

workflow.on('generateCreateDBJS', function(){
  async.waterfall([
    function(cb){
      // retrieve config.example.js from file system
      require('fs').readFile('./create_db_schema/createDB.example.js', {encoding: 'utf8'}, function(err, data){
        return err? cb(err): cb(null, data);
      });
    },
    function(content, cb){
      var map = {
        '{{MYSQL_USER}}': workflow.mysql.user,
        '{{MYSQL_PASSWORD}}': workflow.mysql.password,
        '{{MYSQL_HOST}}': workflow.mysql.host
      };
      for(var key in map){
        if(map.hasOwnProperty(key)){
          content = content.replace(new RegExp(key, 'g'), map[key]);
        }
      }
      cb(null, content);
    },
    function(content, cb){
      // output config.js back to filesystem
      require('fs').writeFile('./create_db_schema/createDB.js', content, function(err, res){
        return err? cb(err): cb();
      });
    }
  ], function(err, result){
    if(err){
      console.log('error generating createDB.js.');
      process.exit(-1);
    }
    return workflow.emit('complete');
  });
});

workflow.on('complete', function(){
  // if(workflow.db){
  //   workflow.db.close();
  // }
  console.log('=====Mysql Set up initialization complete=====');
  process.exit(0);
});

workflow.emit('collectUserInput');
