import React from 'react';

const ListMovies = (props) => {
    const listview = ({dataList}) => {
        if(dataList){
            return dataList.map((data) => {
                return (
                    <div key={data.id}>{data.name}</div>
                )
            })
        }
    }
    return(
        <div>
            {listview(props)}
        </div>
    )
}


export default ListMovies;