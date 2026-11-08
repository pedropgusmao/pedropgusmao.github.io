(function () {
  var buttons = document.querySelectorAll('.filter button');
  var years = document.querySelectorAll('.year');

  function apply(filter) {
    years.forEach(function (year) {
      var shown = 0;
      year.querySelectorAll('.pub').forEach(function (pub) {
        var type = pub.getAttribute('data-type');
        var visible =
          filter === 'all' ||
          (filter === 'preprint' && (type === 'preprint' || type === 'submitted')) ||
          (filter === 'reviewed' && type !== 'preprint' && type !== 'submitted' && type !== 'thesis');
        pub.hidden = !visible;
        if (visible) shown++;
      });
      year.hidden = shown === 0;
    });
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === filter));
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-filter')); });
  });
})();
