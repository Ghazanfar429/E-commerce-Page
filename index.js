let basket = document.getElementById("cart"),
  selected_qty = document.getElementById("display"),
  calculator_add = document.getElementById("plus"),
  calculator_sub = document.getElementById("minus"),
  cart_btn = document.getElementById("cart_btn"),
  duffy = document.getElementsByClassName("thumb"),
  mew = document.getElementById("hen"),
  fear = document.getElementById("magic"),
  change = document.getElementById("main_image"),
  close = document.querySelector(".cross img"),
  h_thumb = document.getElementsByClassName("pop_up_thumb"),
  aside_img = document.getElementById("pop_img"),
  pre = document.getElementById("x01"),
  nxt = document.getElementById("x02"),
  options = document.querySelector(".menu"),
  cover = document.getElementsByTagName("nav"),
  shut = document.querySelector(".hehe"),
  dim = document.getElementById("magic");

function hello() {
  if (basket.childElementCount > 0) {
    basket.removeChild(basket.children[1]);
  }
}

basket.addEventListener("click", function () {
  const block = document.createElement("div");
  block.className = "Fix_me";
  block.style.backgroundColor = "hsl(0, 0%, 100%)";
  block.style.width = "30rem";
  block.style.height = "auto";
  block.style.position = "absolute";
  block.style.top = "40px";
  block.style.right = "-50px";
  block.style.borderRadius = "10px";
  block.style.boxShadow =
    "3px 3px 15px hsl(220, 14%, 85%),-3px -3px 15px hsl(220, 14%, 85%)";
  block.style.cursor = "auto";
  if (selected_qty.value === "0") {
    if (basket.childElementCount < 2) {
      const para1 = document.createElement("p");
      para1.style.color = "black";
      para1.style.fontFamily = "Kumbh Sans";
      para1.style.fontSize = "16px";
      para1.style.fontWeight = "700";
      para1.style.padding = "10px";
      para1.style.borderBottom = "solid 1px hsl(220, 14%, 85%)";

      const head = document.createTextNode("Cart");

      para1.appendChild(head);
      block.appendChild(para1);
      const para2 = document.createElement("p");
      para2.style.color = "hsl(219, 9%, 45%)";
      para2.style.fontFamily = "Kumbh Sans";
      para2.style.fontSize = "16px";
      para2.style.fontWeight = "700";
      para2.style.padding = "50px";
      para2.style.textAlign = "center";

      const qty = document.createTextNode("Your cart is empty");

      para2.appendChild(qty);
      block.appendChild(para2);

      basket.appendChild(block);
    } else {
      hello();
    }
  }

  if (selected_qty.value > 0) {
    if (basket.childElementCount == 3) {
      basket.removeChild(basket.lastChild);
      basket.removeChild(basket.lastchild);
    }
    const para2 = document.createElement("div");
    para2.style.display = "flex";
    para2.style.alignItems = "center";
    para2.style.justifyContent = "center";
    para2.style.color = "hsl(219, 9%, 45%)";
    para2.style.fontFamily = "Kumbh Sans";
    para2.style.fontSize = "14px";
    para2.style.fontWeight = "400";
    para2.style.padding = "10px";
    const para2_img = document.createElement("img");
    para2_img.style.width = "50px";
    para2_img.style.height = "50px";
    para2_img.setAttribute("src", "images/image-product-1-thumbnail.jpg");
    const para2_details = document.createElement("p");
    para2_details.style.textAlign = "center";
    var price = selected_qty.value * 125;
    const para2_detailstext = document.createTextNode(
      "Fall Limited Edition Sneakers $125.00 x " +
        selected_qty.value +
        " = $" +
        price
    );
    para2_details.appendChild(para2_detailstext);
    const para2_del = document.createElement("img");
    para2_del.setAttribute("src", "images/icon-delete.svg");
    const check_out = document.createElement("input");
    check_out.setAttribute("type", "button");
    check_out.style.backgroundColor = "hsl(26, 100%, 55%)";
    check_out.style.color = "hsl(0, 0%, 100%)";
    check_out.style.border = "none";
    check_out.style.borderRadius = "5px";
    check_out.style.padding = "1rem 9rem";
    check_out.style.marginLeft = "3rem";
    check_out.style.marginBottom = "2rem";
    check_out.style.textAlign = "center";
    check_out.value = "Check out";
    para2.appendChild(para2_img);
    para2.appendChild(para2_details);
    para2.appendChild(para2_del);
    block.appendChild(para2);
    block.appendChild(check_out);
    basket.appendChild(block);
  }
});

// Item buttons

calculator_add.addEventListener("click", function () {
  selected_qty.value++;
  if (basket.childElementCount > 1) {
    basket.removeChild(basket.children[1]);
    basket.removeChild(basket.children[1]);
  }
});

calculator_sub.addEventListener("click", function () {
  if (selected_qty.value > 0) {
    selected_qty.value--;
  }
  if (basket.childElementCount > 1) {
    basket.removeChild(basket.children[1]);
    basket.removeChild(basket.children[1]);
  }
});

cart_btn.addEventListener("click", few);

function few() {
  g();
  if (isNaN(selected_qty.value)) {
    alert("Please enter number");
  }

  if (selected_qty.value > 0) {
    var new_div = document.createElement("div");
    new_div.style.position = "absolute";
    new_div.style.top = "-10px";
    new_div.style.left = "0";

    var parain_div = document.createElement("p");
    parain_div.style.width = "16px";
    parain_div.style.height = "16px";
    parain_div.style.backgroundColor = "hsl(26, 100%, 55%)";
    parain_div.style.color = "white";
    parain_div.style.fontFamily = "Kumbh Sans";
    parain_div.style.fontSize = "12px";
    parain_div.style.fontWeight = "400";
    parain_div.style.textAlign = "center";
    parain_div.style.padding = "2px";

    var v = document.createTextNode(selected_qty.value);

    new_div.appendChild(parain_div);
    parain_div.appendChild(v);
    basket.appendChild(new_div);
  }
}

function g() {
  if (basket.childElementCount > 1) {
    basket.removeChild(basket.children[1]);
  }
}

// Thumbnasils Setting

duffy[0].addEventListener("click", function () {
  fear.style.opacity = "0.6";
  hen.style.display = "flex";
  duffy[0].style.outline = "solid 2px hsl(26, 100%, 55%)";
  duffy[1].style.outline = "none";
  duffy[2].style.outline = "none";
  duffy[3].style.outline = "none";
  h_thumb[0].style.outline = "solid 2px hsl(26, 100%, 55%)";
  h_thumb[1].style.outline = "none";
  h_thumb[2].style.outline = "none";
  h_thumb[3].style.outline = "none";
});
duffy[1].addEventListener("click", function () {
  fear.style.opacity = "0.6";
  hen.style.display = "flex";
  duffy[1].style.outline = "solid 2px hsl(26, 100%, 55%)";
  duffy[0].style.outline = "none";
  duffy[2].style.outline = "none";
  duffy[3].style.outline = "none";
  change.src = "images/image-product-2.jpg";
  aside_img.src = "images/image-product-2.jpg";
  h_thumb[1].style.outline = "solid 2px hsl(26, 100%, 55%)";
  h_thumb[0].style.outline = "none";
  h_thumb[2].style.outline = "none";
  h_thumb[3].style.outline = "none";
});
duffy[2].addEventListener("click", function () {
  fear.style.opacity = "0.6";
  hen.style.display = "flex";
  duffy[2].style.outline = "solid 2px hsl(26, 100%, 55%)";
  duffy[1].style.outline = "none";
  duffy[0].style.outline = "none";
  duffy[3].style.outline = "none";
  change.src = "images/image-product-3.jpg";
  aside_img.src = "images/image-product-3.jpg";
  h_thumb[2].style.outline = "solid 2px hsl(26, 100%, 55%)";
  h_thumb[1].style.outline = "none";
  h_thumb[0].style.outline = "none";
  h_thumb[3].style.outline = "none";
});
duffy[3].addEventListener("click", function () {
  fear.style.opacity = "0.6";
  hen.style.display = "flex";
  duffy[3].style.outline = "solid 2px hsl(26, 100%, 55%)";
  duffy[1].style.outline = "none";
  duffy[2].style.outline = "none";
  duffy[0].style.outline = "none";
  change.src = "images/image-product-4.jpg";
  aside_img.src = "images/image-product-4.jpg";
  h_thumb[3].style.outline = "solid 2px hsl(26, 100%, 55%)";
  h_thumb[1].style.outline = "none";
  h_thumb[2].style.outline = "none";
  h_thumb[0].style.outline = "none";
});

h_thumb[0].addEventListener("click", function () {
  h_thumb[0].style.outline = "solid 2px hsl(26, 100%, 55%)";
  aside_img.src = "images/image-product-1.jpg";
  h_thumb[1].style.outline = "none";
  h_thumb[2].style.outline = "none";
  h_thumb[3].style.outline = "none";
  change.src = "images/image-product-1.jpg";
  duffy[0].style.outline = "solid 2px hsl(26, 100%, 55%)";
  duffy[1].style.outline = "none";
  duffy[2].style.outline = "none";
  duffy[3].style.outline = "none";
});
h_thumb[1].addEventListener("click", function () {
  h_thumb[1].style.outline = "solid 2px hsl(26, 100%, 55%)";
  h_thumb[0].style.outline = "none";
  h_thumb[2].style.outline = "none";
  h_thumb[3].style.outline = "none";
  aside_img.src = "images/image-product-2.jpg";
  change.src = "images/image-product-2.jpg";
  duffy[1].style.outline = "solid 2px hsl(26, 100%, 55%)";
  duffy[0].style.outline = "none";
  duffy[2].style.outline = "none";
  duffy[3].style.outline = "none";
});
h_thumb[2].addEventListener("click", function () {
  h_thumb[2].style.outline = "solid 2px hsl(26, 100%, 55%)";
  h_thumb[1].style.outline = "none";
  h_thumb[0].style.outline = "none";
  h_thumb[3].style.outline = "none";
  aside_img.src = "images/image-product-3.jpg";
  change.src = "images/image-product-3.jpg";
  duffy[2].style.outline = "solid 2px hsl(26, 100%, 55%)";
  duffy[1].style.outline = "none";
  duffy[0].style.outline = "none";
  duffy[3].style.outline = "none";
});
h_thumb[3].addEventListener("click", function () {
  h_thumb[3].style.outline = "solid 2px hsl(26, 100%, 55%)";
  h_thumb[1].style.outline = "none";
  h_thumb[2].style.outline = "none";
  h_thumb[0].style.outline = "none";
  aside_img.src = "images/image-product-4.jpg";
  change.src = "images/image-product-4.jpg";
  duffy[3].style.outline = "solid 2px hsl(26, 100%, 55%)";
  duffy[1].style.outline = "none";
  duffy[2].style.outline = "none";
  duffy[0].style.outline = "none";
});

// Next and Previous Button

nxt.addEventListener("click", function () {
  if (aside_img.src.match("product-1.jpg")) {
    aside_img.src = "images/image-product-2.jpg";
    h_thumb[0].style.outline = "none";
    h_thumb[1].style.outline = "solid 2px hsl(26, 100%, 55%)";
  } else if (aside_img.src.match("product-2.jpg")) {
    aside_img.src = "images/image-product-3.jpg";
    h_thumb[1].style.outline = "none";
    h_thumb[2].style.outline = "solid 2px hsl(26, 100%, 55%)";
  } else if (aside_img.src.match("product-3.jpg")) {
    aside_img.src = "images/image-product-4.jpg";
    h_thumb[2].style.outline = "none";
    h_thumb[3].style.outline = "solid 2px hsl(26, 100%, 55%)";
  } else if (aside_img.src.match("product-4.jpg")) {
    aside_img.src = "images/image-product-1.jpg";
    h_thumb[3].style.outline = "none";
    h_thumb[0].style.outline = "solid 2px hsl(26, 100%, 55%)";
  }
});

pre.addEventListener("click", function () {
  if (aside_img.src.match("product-1.jpg")) {
    aside_img.src = "images/image-product-4.jpg";
    h_thumb[0].style.outline = "none";
    h_thumb[3].style.outline = "solid 2px hsl(26, 100%, 55%)";
  } else if (aside_img.src.match("product-4.jpg")) {
    aside_img.src = "images/image-product-3.jpg";
    h_thumb[3].style.outline = "none";
    h_thumb[2].style.outline = "solid 2px hsl(26, 100%, 55%)";
  } else if (aside_img.src.match("product-3.jpg")) {
    aside_img.src = "images/image-product-2.jpg";
    h_thumb[2].style.outline = "none";
    h_thumb[1].style.outline = "solid 2px hsl(26, 100%, 55%)";
  } else if (aside_img.src.match("product-2.jpg")) {
    aside_img.src = "images/image-product-1.jpg";
    h_thumb[1].style.outline = "none";
    h_thumb[0].style.outline = "solid 2px hsl(26, 100%, 55%)";
  }
});
// CLose Function

close.addEventListener("click", function () {
  hen.style.display = "none";
  fear.style.opacity = "1";
});

// Menu Setting

options.addEventListener("click", function () {
  cover[0].style.display = "flex";
});

shut.addEventListener("click", function () {
  cover[0].style.display = "none";
});
