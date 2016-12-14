import React from 'react';
import { Calendar } from 'antd';

export default class myCalendar extends React.Component{
    dateCellRender = (value) => {
        return <div>自定义数据 {value.getDayOfMonth()}</div>
    }

    mothCellRender = (value) => {
        return <div>自定义数据 {value.getMonth()}</div>
    }

    render(){
        return (
            <Calendar defaultValue={new date('2010-10-10')}
                      dateCellRender={this.dateCellRender}
                      mothCellRender={this.mothCellRender}/>
        )
    }
}