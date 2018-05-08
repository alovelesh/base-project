export class ListConfig {
	//[config]:ListConfig
	//[dataSource] : object[];
	//[totalCount] ?: number // Provide Only in case of serverInteraction is true
	//(initialized) ?: Function
	//(onSelect) ?: Function
	columns : {
		field : string,
		title ?: string, //(titlecase the field)
		notToDisplay ?:boolean, //(false)
		notToSort ?:boolean, //(false)
	}[];
	selectable ?: boolean; //(false)
	showLoadingProgress ?: boolean; //(false)
	showPopupOnDelete ?: boolean | {
		title ?: string, //('Delete')
		textContent ?: string, //('Are you sure you want to delete this record?')
		showCancelIcon ?: boolean, //(true)
		ok ?: {
			text ?: string, //('Delete')
			icon ?: string //('delete')
		},
		cancel ?: {
			text ?: string, //('Cancel')
			icon ?: string //('cancel')
		},
	}; //(false)
	sortable ?: boolean; //(false)
	filterable ?: boolean; //(false)
	pageable ?: boolean | {
		pageSize ?: number, //optional(10)
		pageSizeOptions ?: number[], //optional([10,20,50])
		showFirstLastButtons ?: boolean //optional(true)
	}; //(false)	
	serverInteraction ?: boolean; //(false)
	footer ?: {
		row : {}
	}; //(false)
	actions ?: {
		title ?: string, //(Action)
		edit ?: boolean | {
			isDisable ?: boolean //(false)
		},
		delete ?: boolean |  {
			isDisable ?: boolean //(false)
		},
	};
	allowAdd ?: boolean | {
		tooltip ?: string, // (Add Record)
		tooltipPosition ?: string, //optional('after')
		//add ?: Function,
		isDisable ?: boolean //(false)
	};
}