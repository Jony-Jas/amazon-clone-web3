// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

contract Amazon{
    struct Product{
        string name;
        string description;
        uint price;
        string rating;
        string img;
        address seller;
        uint purchasecount;
    }
    uint productcount=0;
    mapping(uint=>Product) public products;

    function listProduct(
        string memory _name,
        string memory _description,
        uint _price,
        string memory _rating,
        string memory _img
    ) public {

        Product memory newProduct = Product({
            name: _name,
            description: _description,
            price: _price,
            rating: _rating,
            img: _img,
            seller: msg.sender,
            purchasecount: 0
        });
        products[productcount] = newProduct;
        productcount++;
    }

    function getProductCount() public view returns(uint){
        return productcount;
    }

    function purchaseProduct(uint id) public payable{
        Product storage product = products[id];
        require(msg.value==product.price);
        payable(product.seller).transfer(msg.value);
        product.purchasecount++;
    }
}