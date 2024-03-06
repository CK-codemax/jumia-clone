'use client'

import { useDispatch } from "react-redux";
import OrderSuccess from "../../components/OrderSuccess";
import { clearCart } from "../../redux/cartSlice";
import { useEffect } from "react";
import Header from "../../components/Header";


export default function Page(){
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (<>
    <Header />
  <OrderSuccess />
  </>
  )
  }
