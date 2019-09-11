/* Add all the required libraries*/
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
var uri = config.db.uri;
mongoose.connect(uri, {useNewUrlParser: true});

mongoose.set('useFindAndModify', false);

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.find({ name: 'Library West'}, function(err, listing) {
     if (err) return err;
     console.log(listing);
   });

};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.deleteMany({ code: 'CABL'}, function(err, listing) {
     if (err) return err;
     console.log(listing);
   });

};

var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */

   let query = { name: 'Phelps Laboratory' };
   Listing.findOneAndUpdate(query, { address: '1275 Center Drive Gainesville, FL 32611' }, function(err, listing) {
     if (err) throw err;
     console.log(listing);
   });
};

var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, listing) {
     if (err) throw err;
     console.log(listing);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
