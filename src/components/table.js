import React from 'react';
import {Table, Icon} from 'antd';

export default class myTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tDate: [],
            selectedRowKeys: []
        }
    }

    componentDidMount(){
        const data = [];

        for (let i=0; i<46; i++){
            data.push({
                key: i,
                name: `lyctea ${i}`,
                age: 18,
                address: `中国 ${i}`,
                remark: `http://wwww.baidu.com`,
                operate: '暂无'
            })
        }
        this.setState({
            tDate: data
        })
    }

    //checkbox状态

    render() {
        const colums = [{
            title: '姓名',
            width: '20%',
            dataIndex: 'name'
        },{
            title: '年龄',
            width: '20%',
            dataIndex: 'age'
        },{
            title: '住址',
            width: '20%',
            dataIndex: 'address'
        },{
            title: '备注',
            width: '20%',
            dataIndex: 'remark',
            render(text){
                return <a href={text} target="_blank">博客园</a>
            }
        },{
            title: '操作',
            width: '20%',
            dataIndex: 'operate'
        }];

        const { selectedRowKeys } = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSlecteChange
        }

        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize){
                console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange(current){
                console.log('Current: ',current);
            }
        }

        return (
            <Table rowSelection={rowSelection} columns={colums}
                   dataSource={this.state.tDate} bordered
                   pagination={pagination} />
        );
    }
}