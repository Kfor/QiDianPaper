import React from 'react';
import '../css/common.css';
import './Search.css';
import PL from '../tools/PaperList/PaperList';
class Search extends React.Component{
    getItem =()=>{
        let arr =[];
        for(let i=0;i<4;i++){
            let item={
                key:i
            }
            arr.push(item)
        }
        return arr;
    }
    itemToData =(item)=>(<PL key={item.key}/>)
    render(){
        return (
           <div className="SearchOutSide scFlexRow">
               <div className="SearchInfo scFlexColumn">
                    <div className="SearchInfoTitle csFlexColumn">
                        <div className="SearchResultTitle ccFlexRow">
                            检索结果：<p>46</p>
                        </div>
                        <div className="SearchResultTitle ccFlexRow">
                            检索内容：<p>区块链</p>
                        </div>
                    </div>
               </div>
               <div className="SearchContent ssFlexColumn">
                    <div className="SearchContentTitle bcFlexRow">
                        <div className="SearchChoice bcFlexRow">
                            <div>排序方式：</div>
                            <div>日期</div>
                            <div>被引次数</div>
                            <div>使用次数</div>
                            <div>相关性</div>
                        </div>
                    </div>
                    {this.getItem().map(this.itemToData)}
               </div>
           </div>
            )
    }
}

export default Search;
