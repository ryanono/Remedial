var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: "ADMINISTRASIKECAMATAN_AR_50K",
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_JANGKAUAN_2 = new ol.format.GeoJSON();
var features_JANGKAUAN_2 = format_JANGKAUAN_2.readFeatures(json_JANGKAUAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUAN_2.addFeatures(features_JANGKAUAN_2);
var lyr_JANGKAUAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JANGKAUAN_2, 
                style: style_JANGKAUAN_2,
                popuplayertitle: "JANGKAUAN",
                interactive: false,
                title: '<img src="styles/legend/JANGKAUAN_2.png" /> JANGKAUAN'
            });
var format_JALAN_3 = new ol.format.GeoJSON();
var features_JALAN_3 = format_JALAN_3.readFeatures(json_JALAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_3.addFeatures(features_JALAN_3);
var lyr_JALAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_3, 
                style: style_JALAN_3,
                popuplayertitle: "JALAN",
                interactive: false,
                title: '<img src="styles/legend/JALAN_3.png" /> JALAN'
            });
var format_FASILITASKESEHATAN_4 = new ol.format.GeoJSON();
var features_FASILITASKESEHATAN_4 = format_FASILITASKESEHATAN_4.readFeatures(json_FASILITASKESEHATAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FASILITASKESEHATAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASILITASKESEHATAN_4.addFeatures(features_FASILITASKESEHATAN_4);
var lyr_FASILITASKESEHATAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FASILITASKESEHATAN_4, 
                style: style_FASILITASKESEHATAN_4,
                popuplayertitle: "FASILITAS KESEHATAN",
                interactive: true,
    title: 'FASILITAS KESEHATAN<br />\
    <img src="styles/legend/FASILITASKESEHATAN_4_0.png" /> Pos Pengawasan Obat<br />\
    <img src="styles/legend/FASILITASKESEHATAN_4_1.png" /> Rumah Sakit Tni Al Kelurahan Maro<br />\
    <img src="styles/legend/FASILITASKESEHATAN_4_2.png" /> Rumah Sakit Umum Merauke Kelurahan Maro<br />\
    <img src="styles/legend/FASILITASKESEHATAN_4_3.png" /> Unit Transfusi Darah<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_JANGKAUAN_2.setVisible(true);lyr_JALAN_3.setVisible(true);lyr_FASILITASKESEHATAN_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_JANGKAUAN_2,lyr_JALAN_3,lyr_FASILITASKESEHATAN_4];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JANGKAUAN_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'type': 'type', 'start': 'start', });
lyr_JALAN_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_FASILITASKESEHATAN_4.set('fieldAliases', {'NAMA': 'NAMA', 'REMARK': 'REMARK', 'JANGKAUAN': 'JANGKAUAN', 'DIDIRIKAN': 'DIDIRIKAN', 'FOTO': 'FOTO', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JANGKAUAN_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'Range', 'JPLYRS': 'Range', 'ALAMAT': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_JALAN_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_FASILITASKESEHATAN_4.set('fieldImages', {'NAMA': 'TextEdit', 'REMARK': 'TextEdit', 'JANGKAUAN': 'TextEdit', 'DIDIRIKAN': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JANGKAUAN_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_JALAN_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_FASILITASKESEHATAN_4.set('fieldLabels', {'NAMA': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'JANGKAUAN': 'inline label - always visible', 'DIDIRIKAN': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr_FASILITASKESEHATAN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});