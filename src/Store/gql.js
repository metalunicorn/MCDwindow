const getGQL = url => 
(query, variables={}) => 
fetch('http://localhost:3000/main',{method: 'GET'
        }).then(res =>res.json())

export const gql = getGQL('http://localhost:3000/main')

