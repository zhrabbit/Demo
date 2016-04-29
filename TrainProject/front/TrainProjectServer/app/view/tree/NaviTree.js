Ext.define('TrainProjectServer.view.tree.NaviTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.tree-navitree',

	requires: [
        'TrainProjectServer.view.tree.NaviTreeController',
        'TrainProjectServer.view.tree.NaviTreeModel'
	],

	controller: 'tree-navitree',
	viewModel: {
		type: 'tree-navitree'
	},

	bind: {
		store: '{functionTree}'
	},

	autoScroll: true,
	frame: false,
	rootVisible: false,
	hideHeaders: true,
	title: '导航树',

	listeners: {
		scope: 'controller',
		itemclick: 'onTreeSelected'
	}
});