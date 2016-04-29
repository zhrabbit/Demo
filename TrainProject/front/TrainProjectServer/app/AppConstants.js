Ext.define('TrainProjectServer.AppConstants', {
	singleton: true,

	PAGE_FLAG: 'pageFlag',
	RESPONSE_SPLITTER: ';',
	PAGE_SIZE: 30,

	/*
	queryType
	*/
	QUERYTYPE: 'queryType',
	GETALL: 'getAll',
	GETBYAREA: 'getByArea',
	GETBYCOMPONYNAME: 'getByComponyName',

	/*
	params
	*/
	PARAM_AREA: 'area',
	PARAM_COMPONYNAME: 'componyName',

	END: 'end'
});

_myConstants = TrainProjectServer.AppConstants;