##Numbeo API Info

API KEY: n584lhb87k93ms

DOC: www.numbeo.com/api/doc.jsp

Example call cities:
`/api/cities?api_key=your_api_key`

curl http://www.numbeo.com/api/cities?api_key=n584lhb87k93ms

   "cities":[  
      {  
         "city_id":6189,
         "longitude":20.4568089,
         "latitude":44.8178787,
         "country":"Serbia",
         "city":"Belgrade"
      },
      
Example call for price in a specific city:
`/api/city_prices?api_key=your_api_key&query=Belgrade`

http://www.numbeo.com/api/city_prices?api_key=n584lhb87k93ms&query=Berlin

   "monthLastUpdate":4,
   "contributors":91,
   "name":"Belgrade, Serbia",
   "prices":[
      {
         "average_price":5.443478260869566,
         "item_name":"Meal, Inexpensive Restaurant, Restaurants",
         "highest_price":7,
         "item_id":1,
         "lowest_price":4
      },
      
      
Example call hotels:
`/api/hotel_prices?api_key=your_api_key&query=Belgrade`

   "3 star":{
      "value":"47.00",
      "lowest":"13.00"
   },
   
