import React from "react";
import { GridColumn, Grid, GridRow } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";
import {Route} from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

import { ToastContainer, toast } from 'react-toastify';

export default function Dashboard() {
  return (
    <div>
    <ToastContainer position="bottom-right"/>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
  
          <Route exact path="/" component={ProductList} />
          <Route exact path="/products" component={ProductList} />
          <Route  path="/products/:name" component={ProductDetail} />
          <Route  path="/cart" component={CartDetail} />
          

          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
