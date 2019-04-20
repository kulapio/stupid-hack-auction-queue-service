# Afin Auction Blockchain API Service Project

## Build Image

```
./build-image.sh
```

<br />

## List All Assets (Auth Disabled)
```
curl -H "Content-Type: application/json" 'http://localhost:4000/assetmanagement/asset/list'
```

## Insert New Asset (Auth Disabled)
```
curl -H "Content-Type: application/json" \
http://localhost:4000/assetmanagement/asset -d "{\"supplier\": \"CIMB\",\"id\": \"SIA00003\",\"category\": \"Vehicle\",\"subCategory\": \"Car\",\"maker\": \"Product Maker\",\"model\": \"Product Model\",\"modelSub\": \"Product Model Sub\",\"location\": \"Product Location\",\"chassisNumber\": \"Product Chassis Number\",\"engineNumber\": \"Product Engine Number\",\"madeYear\": 2019,\"regYear\": 2019,\"colour\": \"White\",\"gear\": \"Product Gear\",\"engineSize\": \"Product Engine Size (CC.)\",\"fuelType\": \"Product Fuel Type\",\"mile\": 2222,\"marketPrice\": 500000,\"brandNewPrice\": 700000,\"plateNumber\": \"Product Plate Number\",\"plateProvince\": \"Product Plate Province\",\"taxExpiration\": \"Product Tax Expiration\",\"description\": \"Product Description\",\"pictures\": [\"/path/to/file/image.jpg\",\"/path/to/file/image2.png\"]}"
```

## Update Asset (Auth Disabled)
```
curl -H "Content-Type: application/json" -X PATCH http://localhost:4000/assetmanagement/asset/SIA00003 -d "{\"supplier\": \"TMB\",\"colour\": \"green\",\"marketPrice\": 200000000}"
```

## Delete Asset (Auth Disabled)
```
curl -H "Content-Type: application/json" -X DELETE http://localhost:4000/assetmanagement/asset/SIA00003
```
