import React from 'react';
import { useQuery, ApolloProvider } from '@apollo/react-hooks'; 
import gql from 'graphql-tag';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import MuiDatatable from 'mui-datatables';

const QUERY = gql`
  query {
    tableList {
      id 
      name 
      title 
    }
  }
`;

const columns = [
  {
    name: 'id', 
    label: 'ID', 
  }, 
  {
    name: 'name', 
    label: 'テーブル名', 
  }, 
  {
    name: 'title', 
    label: '表示名', 
  }, 
];
const Tables = () => {
  const { loading, error, data } = useQuery(QUERY);
  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <MuiDatatable 
        columns={columns}
        data={data ? data.tableList : []}
        options={{
          responsive: 'scroll', 
        }}
      />
    </div>
  )
}

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://daiei-apollo.aki323buri2.now.sh/', 
})
const client = new ApolloClient({
  cache, 
  link, 
})

export default props => (
  <ApolloProvider client={client}>
    <Tables {...props} />
  </ApolloProvider>
);