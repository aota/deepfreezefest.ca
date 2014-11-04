$(function(){
  // make sure Dropbox links download immediately
  $('a[href*="dropbox.com"]').not('[href$="?dl=1"]').each(function(){
    this.href = this.href.replace(/\?dl=\d/, '') + '?dl=1';
  });
});
