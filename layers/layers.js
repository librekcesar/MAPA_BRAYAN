var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Combinado_1 = new ol.format.GeoJSON();
var features_Combinado_1 = format_Combinado_1.readFeatures(json_Combinado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Combinado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combinado_1.addFeatures(features_Combinado_1);
var lyr_Combinado_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Combinado_1, 
                style: style_Combinado_1,
                interactive: true,
    title: 'Combinado<br />\
    <img src="styles/legend/Combinado_1_0.png" /> FLOTILLA<br />\
    <img src="styles/legend/Combinado_1_1.png" /> SP<br />\
    <img src="styles/legend/Combinado_1_2.png" /> <br />'
        });
var format_Disuelto_2 = new ol.format.GeoJSON();
var features_Disuelto_2 = format_Disuelto_2.readFeatures(json_Disuelto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disuelto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disuelto_2.addFeatures(features_Disuelto_2);
var lyr_Disuelto_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Disuelto_2, 
                style: style_Disuelto_2,
                interactive: true,
    title: 'Disuelto<br />\
    <img src="styles/legend/Disuelto_2_0.png" /> FLOTILLA<br />\
    <img src="styles/legend/Disuelto_2_1.png" /> SP<br />\
    <img src="styles/legend/Disuelto_2_2.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Combinado_1.setVisible(true);lyr_Disuelto_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Combinado_1,lyr_Disuelto_2];
lyr_Combinado_1.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', 'layer': 'layer', 'path': 'path', 'tipo': 'tipo', });
lyr_Disuelto_2.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', 'layer': 'layer', 'path': 'path', 'tipo': 'tipo', });
lyr_Combinado_1.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'tipo': 'TextEdit', });
lyr_Disuelto_2.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'tipo': 'TextEdit', });
lyr_Combinado_1.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', 'layer': 'no label', 'path': 'no label', 'tipo': 'no label', });
lyr_Disuelto_2.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', 'layer': 'no label', 'path': 'no label', 'tipo': 'no label', });
lyr_Disuelto_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});