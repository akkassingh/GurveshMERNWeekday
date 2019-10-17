export function moviesList(){
    return {
        type: 'MOVIES_LIST',
        payload : [
            {id : '1', name : 'Avenger'},
            {id : '2', name : 'Doctor Strange'},
            {id : '3', name : 'Hulk'}
        ]
    }
}