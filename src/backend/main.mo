import Text "mo:core/Text";

actor {
  type RestaurantInfo = {
    name : Text;
    tagline : Text;
    phone : Text;
    address : Text;
    mapUrl : Text;
    zomatoUrl : Text;
  };

  let restaurantInfo : RestaurantInfo = {
    name = "Aromas of Andhra";
    tagline = "Traditional Flavors of Andhra";
    phone = "+1234567890";
    address = "123 Andhra Street, Hyderabad, India";
    mapUrl = "https://maps.example.com/restaurant";
    zomatoUrl = "https://zomato.example.com/restaurant";
  };

  public query ({ caller }) func getRestaurantInfo() : async RestaurantInfo {
    restaurantInfo;
  };
};
