Parse.initialize("FU763QF0GcO4c8CWgyErSTBwEfYmmvtJxgvYLLjs", "qyte7Vfkkc3NtqL767YsGaXO7FjGk4KNUWx5RP7E");

//MODEL//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Gallery = Parse.Object.extend({
  className: 'Gallery'
});

var gallery = new Gallery();

//COLLECTION//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var GalleryCollection = Parse.Collection.extend({

  model: Gallery

});

var collection = new GalleryCollection();

////VIEW//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var GalleryView = Parse.View.extend({

  pictureTemplate: _.template($('.picture-template').text()),

  events: {

    "click .upload": "showUpload"
  },

  initialize: function(){
    this.model.on('add', this.render);  
    $('.container').append(this.el);
      this.render();
  }, 

  //this.model.on('add', this.render)
  //this.model.trigger('add')

  render: function(){
    if (this.model.attributes.hasOwnProperty('url')) {
    var renderedTemplate = this.pictureTemplate(this.model.attributes);
    this.$el.html(renderedTemplate);
    return this;

    }
  
  },

  showUpload: function(){
    $('.upload').click(function(){
      gallery.set('url', $('.uploader').val());
      gallery.save();
    })
  }
});

//FETCH//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

    
    collection.fetch({add:true});


