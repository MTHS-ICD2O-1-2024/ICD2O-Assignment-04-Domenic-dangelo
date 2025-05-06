// Copyright (c) 2020 domeic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function checks if the user has selected the random number from above.
 */
// eslint-disable-next-line no-unused-vars
function calculate() {
  // process
  const inputAmount = parseFloat(document.getElementById("amountOfPacks").value);
  const yuGiOh = document.getElementById("option-yu-gi-oh").checked
  const pokemon = document.getElementById("option-pokemon").checked
  const onePiece = document.getElementById("option-one-piece").checked
  const SALES_TAX = 0.13
  let basePrice = 0;
  const subtotal = basePrice * inputAmount;
  const tax = subtotal * SALES_TAX;
  const total = subtotal + tax;


  // input
  if (yuGiOh) {
    basePrice = 14.90;
  } 
  else if (pokemon) {
    basePrice = 12.50;
  } 
  else if (onePiece) {
    basePrice = 15.95;
  } 
  else {
    basePrice = 22.80;
  }

    document.getElementById("result").innerHTML =
    "<p>Subtotal: $" + subtotal.toFixed(2) + "</p>" +
    "<p>Tax: $" + tax.toFixed(2) + "</p>" +
    "<p>Total: $" + total.toFixed(2) + "</p>";
} 
