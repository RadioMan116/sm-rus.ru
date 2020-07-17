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
					iconCaption: element.getAttribute('data-content'),
					balloonContent: element.getAttribute('data-text'),
				}, {
					preset: 'islands#redIcon',
				});

				myPlacemark.options
					// Во избежание двойной реакции геообъекта
					// на изменение опций сначала вызываем freeze, а после задания
					// всех значений вызываем unfreeze.
					.freeze()
					.unfreeze();

				myMap.geoObjects.add(myPlacemark);

			}
		});

	}

	// contact map
	(function () {

		var map = document.getElementById('js-warranty__map');


		if (!map) {
			return false;
		}

		var tmp = (map.getAttribute('data-coords')).split(',');
		var coords = []
		coords[0] = {
			x: tmp[0],
			y: tmp[1]
		}


		createMaps(map, coords, tmp, 14);

	})();

});
