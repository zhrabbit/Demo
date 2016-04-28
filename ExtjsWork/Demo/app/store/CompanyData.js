/**
 * @class Demo.store.GridData
 * @extends Ext.data.Model.
 * @xtype DemomodelGridData
 * @mixins Gearbox.mixin.ModelInfo,
 * @mixins Gearbox.mixin.Logger
 * @requires 
 */
Ext.define('Demo.store.CompanyData', {
	extend: 'Ext.data.Store',
    alias: 'store.companydata',
	fields: ['company', 'area', 'streename', 'maleNo', 'femaleNo'],
	pageSize: 2,
	data: [{
		company: '云帆',
		area: '高新园区',
		streename: '高新区街道1',
		maleNo: 45,
		femaleNo: 30
	}, {
		company: '东软',
		area: '高新园区',
		streename: '高新区街道2',
		maleNo: 100,
		femaleNo: 40
	}, {
		company: 'IBM',
		area: '高新园区',
		streename: '高新区街道3',
		maleNo: 68,
		femaleNo: 40
	}, {
		company: '东来国旅',
		area: '中山区',
		streename: '中山区街道1',
		maleNo: 46,
		femaleNo: 78
	}, {
		company: '日报社',
		area: '中山区',
		streename: '中山区街道2',
		maleNo: 45,
		femaleNo: 24
	}, {
		company: '大华',
		area: '甘井子区',
		streename: '甘井子区街道1',
		maleNo: 35,
		femaleNo: 14
	}, {
		company: '驰敖',
		area: '甘井子区',
		streename: '甘井子区街道2',
		maleNo: 51,
		femaleNo: 24
	}, {
		company: '半岛晨报',
		area: '西岗区',
		streename: '西岗区街道1',
		maleNo: 14,
		femaleNo: 16
	}, {
		company: '韵达',
		area: '沙河口区',
		streename: '沙河口区街道1',
		maleNo: 26,
		femaleNo: 13
	}]
});