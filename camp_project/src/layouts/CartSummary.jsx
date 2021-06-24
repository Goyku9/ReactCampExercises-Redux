import React from 'react'
import { Dropdown, DropdownDivider, DropdownItem, Label, Button} from "semantic-ui-react";
import { NavLink} from "react-router-dom";
import {useSelector} from 'react-redux'
import { removeFromCart } from '../store/actions/cartActions';
import { useDispatch } from "react-redux";

export default function CartSummary() {

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) =>{
    dispatch(removeFromCart(product))
  }

   const {cartItems} = useSelector(state => state.cart)
    return (
        <div>
        <Dropdown item text="Sepet">
        <Dropdown.Menu>
            {cartItems.map((cartItem) => 

              <DropdownItem>{cartItem.product.productName}
              <Label>{cartItem.quantity}</Label>
              <Button onClick={() => handleRemoveFromCart(cartItem.product)}>Ürünü Sil</Button>
              </DropdownItem>
              
              )}
          <DropdownDivider/>
          <DropdownItem as = {NavLink} to = "/cart" >Sepete Git</DropdownItem>
        </Dropdown.Menu>
      </Dropdown>

        </div>
    )
}
