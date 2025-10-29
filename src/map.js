ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [-26.8244, -65.2170], // Coordinates of the new location
        zoom: 15,
        controls: ['routePanelControl']
    });

    var control = myMap.controls.get('routePanelControl');

    control.routePanel.state.set({
        type: 'masstransit',
        fromEnabled: true,
        toEnabled: false,
        to: 'T4178 Alderetes, Tucumán, Argentina',
    });

    control.routePanel.options.set({
        allowSwitch: false,
        reverseGeocoding: true,
        types: { masstransit: true, pedestrian: true, taxi: true }
    });

    var switchPointsButton = new ymaps.control.Button({
        data: { content: "Intercambiar lugares", title: "Intercambiar los puntos de ruta" },
        options: { selectOnClick: false, maxWidth: 160 }
    });

    switchPointsButton.events.add('click', function () {
        control.routePanel.switchPoints();
    });
    myMap.controls.add(switchPointsButton);
     setTimeout(() => window.scrollTo(0, 0), 100);
});

