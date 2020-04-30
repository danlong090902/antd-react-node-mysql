import { connect } from 'umi';
import React from 'react';
import { Button } from 'antd';
import { ROUTER } from '@/utils/util'

import { routerRedux } from 'dva/router';

import ProductList from '@/components/ProductList';


const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
      <Button
        onClick={
          () => dispatch(routerRedux.push(ROUTER.COMMENT))
        }>
        去留言
      </Button>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);