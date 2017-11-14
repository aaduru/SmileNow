SmileNow

[SmileNow][smile] is a Web Application for users to find a perfect dental care in their neighborhood. It is a clone of Yelp, it allows users to register and search for  dental clinics which are available in their area. They can also add Reviews to the clinics which they have visited.



![SmileNow home page: http://www.smilenow.me/#/login][home page]

## Features

- User accounts with secure authentication
- Business (display list of businesses and detailed business page)
- Reviews (view reviews and add Reviews)
- Search based on the name of the clinic and filter based on the tags
- Displays the location of the business on the map.


![businesspage:http://www.smilenow.me/#/businesses/1][business]

## Project Design

SmileNow was built over a period of 2 weeks..

A [proposal][proposal] was drafted to help provide an implementation timeline during the development process.

A [database schema][schema] was prepared alongside the design proposal.

## Technology

SmileNow is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend.

- [Backend technology][backend]
- [Frontend technology][frontend]


## Features & Implementation
### Businesses page

The user has to login to view or write reviews for businesses.

Businesses page is the root page with a navigator bar and list of all the businesses from the database.

The user can view all the Businesses on the left side of the page. On the right side of the businesses page the map is visible with the location markers for the businesses. The user can click on the markers to view the detailed Business page.  

I have created rails views in the backend which will fetch all the businesses from the database, based on the AJAX request from the front end.

I have used google map API to display the location markers on the map.

```js

// new map is function which gets accessed every time the user scrolls the page
  newMap(){
    const mapRef = this.refs.businessesMap;
    // const mapCenter = { lat: 37.7758, lng: -122.435 }
    const mapCenter = { lat: 37.759051, lng: -122.446786};
    const options = {
      center: mapCenter,
      zoom: 11
    };

    this.map = new google.maps.Map(mapRef, options);

  }
  componentDidMount() {
    this.newMap();
  }

// most of the function happens when the component receives props.
  componentWillReceiveProps(nextProps) {
    // debugger
    this.newMap();
    nextProps.businesses.forEach( business => {
      let lat = business.latitude;
      let lng = business.longitude;

      let string = `${business.name}`;
      let infowindow = new google.maps.InfoWindow({
        content: string
      });

      const marker = new google.maps.Marker({
        position: {lat, lng},
        map: this.map,
        businessId: business.id
      });

// when the mouse is moved over the marker the name f the business is show in a info window and when the marker is clicked the user can navigate to the business page.
      marker.addListener('click', () => this._handleMarkerClick(marker.businessId));

      marker.addListener('mouseover', () => {
        infowindow.open(this.map, marker);
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
      });

      marker.addListener('mouseout', () => {
        infowindow.close();
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
      });
    });

    let string = `${nextProps.selected.name}`;
    let infowindow = new google.maps.InfoWindow({
      content: string
    });

    if (nextProps.selected.selected === "selected"){

      const marker = new google.maps.Marker({
        position: {lat: nextProps.selected.lat, lng: nextProps.selected.long},
        map: this.map,
        businessId: nextProps.selected.businessId
      });
      infowindow.open(this.map, marker);
      setTimeout(function() {infowindow.close();}, 3000);
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    }

  }


  _handleMarkerClick(businessId) {
     hashHistory.push({pathname: `businesses/${businessId}`});
   }


```



### Business Page

It is the detail view of a single Business. Here the user can view the about the clinic. There is a display picture of the clinic, address, telephone number and the user can also view the reviews by other users.

The user  can also leave a review for that particular business.

This detailed data is retrieved from the database based on the Business id, which passed as a AJAX request to the backend.  The data is converted to JSON format and sent as a HttpResponse to the front end.

The user can also search for a specific clinic name by entering the partial name/full name of the clinic/name which is similar to what the user is searching for. The user can also view the clinic based on the type of clinic.

```ruby

def index

  query_filter_id = params[:filterId]
  query = params[:search]

  if params[:search] && params[:filterId]
    @businesses = Business.where("name ILIKE ?", "%#{query}%")
                          .includes(:taggings, :reviews)
                          .where("taggings.tag_id = ?", query_filter_id)
                          .references(:tags)
  elsif params[:filterId]

    @businesses = Business.includes(:taggings, :reviews)
                  .where("taggings.tag_id = ?", query_filter_id)
                  .references(:tags)
  elsif params[:search]
    @businesses = Business.where("name ILIKE ?", "%#{query}%")

  else
    @businesses = Business.all.includes(:taggings, :reviews)
  end

  render "api/businesses/index"
end

```
### Review Page

Once the user has logged In, the user can view the reviews for each and every businesses or leave review for any one of the business.

I have used StarRatingComponent to display the review value for each and every business.

```js

render() {

  return (
      <div className="review_box">
        <div className="review_item">
          <div className="reviewername_box">
            <h1>{this.props.review.user.username}</h1>
            <div className="rating_review_star">
              <div className="des_box">
                <h3 className="rating_des">Rating:
                </h3>
              </div>
              <div className="star_box">
                <span className="rating_star">
                  <StarRatingComponent
                      name="business_rating"
                      starColor="#00ceff"
                      emptyStarColor="#00ceff"
                      starCount={5}
                      value={Math.round(this.props.review.rating)}
                      editing={false}
                      renderStarIcon={(index, value) => {
                        return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                      }} />
                </span>
              </div>
            </div>
          </div>
          <div className="review_contents">
            <p>{this.props.review.content}</p>
          </div>
        </div>

      </div>


  );
}

```

Django view checks if the request from the front end is POST and then saves the data if it is valid. Returns the JSON response to the front end.
```py

def create(request):
    if request.method == 'POST':
        track = TrackForm(request.POST)
        if track.is_valid():
            new_track = track.save()
            data = serializers.serialize("json", [new_track, ])
            return HttpResponse(data, content_type='application/json')
        else:
            return HttpResponse(["Unknown Error. Please try again later."], content_type='application/json')
    else:
        return HttpResponse({}, content_type='application/json')

```





[smile]: http://www.smilenow.me/#/login
[home page]: ./docs/images/homepage.png "smilenow home page"
[businesses]: ./docs/images/businesses.png "List of Clinics"
[business]: ./docs/images/business.png "Detailed Business Page"
[proposal]: ./docs/README.md
[schema]: ./docs/schema.md
[backend]: ./docs/backend.md
[frontend]: ./docs/frontend.md
