$(document).ready(function () {

	var myPlacemark;
	var myMap;

	function createMaps(element, coords, center, zoom) {

		if (!element) {
			return false;
		}

		ymaps.ready(function () {

			myPlacemark;
			myMap = new ymaps.Map(element, {
				center: [parseFloat(center[0]), parseFloat(center[1])],
				zoom: zoom
			}, {
				searchControlProvider: 'yandex#search'
			});

			myMap.controls.remove('searchControl');
			myMap.behaviors.disable('scrollZoom');

			for (var i = 0, l = coords.length; i < l; i += 1) {

				myPlacemark = new ymaps.Placemark([parseFloat(coords[i].x), parseFloat(coords[i].y)], {
					iconCaption: coords[i].c,
					balloonContent: coords[i].t,
				}, {
					preset: 'islands#redIcon',
				});

				// myPlacemark.options
				// 	// Во избежание двойной реакции геообъекта
				// 	// на изменение опций сначала вызываем freeze, а после задания
				// 	// всех значений вызываем unfreeze.
				// 	.freeze()
				// 	.unfreeze();

				myMap.geoObjects.add(myPlacemark);

			}
		});

	}

	// contact map
	(function () {
		var items = document.querySelectorAll('.js-warranty__map-point');
		var map = document.getElementById('js-warranty__map');

		var center = (map.getAttribute('data-center')).split(',');
		if (!map) {
			return false;
		}

		// var tmp = (map.getAttribute('data-coords')).split(',');
		var coords = []
		// coords[0] = {
		// 	x: tmp[0],
		// 	y: tmp[1]
		// }
		$(items).each(function (index) {

			var tmp = (this.getAttribute('data-coords')).split('||')
			// var tmp = ();
			// var tmp = (this.getAttribute('data-text'));

			coords[index] = {
				x: tmp[0],
				y: tmp[1],
				c: tmp[2],
				t: tmp[3]
			}

		});
		console.log(coords)

		createMaps(map, coords, center, 9);

		// createMaps(map, coords, tmp, 14);

	})();

});
