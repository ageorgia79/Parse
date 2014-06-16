Parse.initialize("FU763QF0GcO4c8CWgyErSTBwEfYmmvtJxgvYLLjs", "qyte7Vfkkc3NtqL767YsGaXO7FjGk4KNUWx5RP7E");

//MODEL//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Gallery = Parse.Object.extend("Gallery");

var gallery = new Gallery();

var inputVal = (" ");

gallery.set("url", inputVal);
gallery.save(null, {
  success: function(gallery) {

    alert('new image created' + gallery.id);
  },

  error: function(gallery, error) {

    alert('image failed' + error.description);
  }
});

//COLLECTION//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var GalleryCollection = Parse.Collection.extend({

  model: Gallery

});

var collection = new GalleryCollection();
collection.fetch({
  success: function(collection) {
    collection.each(function(object) {
      console.warn(object);
    });
  },
  error: function(collection, error) {

  }
});

////VIEW//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var GalleryView = Parse.View.extend({

  pictureTemplate: _.template($('.picture-template').text()),

  events: {

    "click .upload": "showUpload"
  },

  initialize: function(){
    this.listenTo(this.model);
    $('.container').append(this.el);
    this.render();
  }, 

  render: function(){
    if (this.model.attributes.hasOwnProperty(object)) {
      var renderTemplate = this.pictureTemplate(this.model.attributes);
      this.$el.html(renderTemplate);
    }
  },

  showUpload: function(){
    console.log('it worked')
    $.post("", {
      url: this.model.attributes.url
    });
  }
})