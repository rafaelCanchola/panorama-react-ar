import React, {Component, Fragment} from "react";
import {StyleSheet, View, ScrollView, Text, Dimensions, FlatList} from "react-native";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

function Ayuda(props) {
    const glosario =[
        {id:'1',header:'Búsqueda por producto',content:'Consiste en tres secciones principales de cada sector, la navegación de las secciones ' +
                'principales se divide por páginas, el cambio de página se logra mediante el swipe ' +
                'hacia la izquierda o hacia la derecha, cada página contiene un scroll para la visualización ' +
                'de todos los productos de el sector seleccionado.'},
        {id:'2',header:'Página del producto',content:'En la parte inferior de la pantalla se encuentra la navegación por pestañas donde se agrupan ' +
                'las secciones principales de información del producto, a su vez cada sección contiene los ' +
                'distintos indicadores, estás son:'},
        {id:'3',list:'○ Introducción \n' +
                '○ Producción\n' +
                '       · Volumen de la Producción Nacional\n' +
                '       · Top en Volumen de Producción\n' +
                '       · Valor de la Producción por Entidad\n' +
                '       · Indicadores 2019\n' +
                '       · Producción Mensual Nacional\n'+
                '○ Comercio\n' +
                '       · Ranking Mundial\n' +
                '       · Comercio Exterior 2019\n' +
                '       · Evolución del Comercio Exterior\n' +
                '       · Distribución Mensual del Comercio Exterior\n' +
                '○ Monografía\n' +
                '       · Descripción Particular\n' +
                '       · Flujo Comercial\n' +
                '       · Curiosidad'},
        {id:'4',title:'Acuacultura.',content:'Es el conjunto de actividades dirigidas a la reproducción controlada, ' +
                'preengorda y engorda de especies de la fauna y flora realizadas en instalaciones ubicadas ' +
                'en aguas dulces, marinas o salobres, por medio de técnicas de cría o cultivo, que sean ' +
                'susceptibles de explotación comercial, ornamental o recreativa.' },
        {id:'5',title:'Acuícola.',content:'Se refiere al cultivo de organismos que viven en el agua.'},
        {id:'6',title:'Año agrícola.',content:'Es el periodo de dieciocho meses que resulta de la adición de las ' +
                'siembras y cosechas que se realizan en los ciclos agrícolas otoño-invierno y primavera-verano, ' +
                'y de las cosechas de productos perennes. Comprende octubre-diciembre de un año, más el año ' +
                'civil siguiente completo y los meses enero-marzo del subsecuente.'},
        {id:'7',title:'Carne en canal de ave.',content:'Es la gallina de desecho o pollo sacrificado, desangrado y ' +
                'desplumado, desprovisto de cabeza, pescuezo, buche, patas, glándula aceitosa de la cola y vísceras abdominales.'}, 
        {id:'8',title:'Carne en canal de bovino.',content:'Animal sacrificado, desangrado y sin piel, abierto a lo ' +
                'largo de la línea media del pecho y abdomen a la cola; separado de la cabeza al nivel del cuello ' +
                '(articulación occipito-atloidea); de las extremidades (patas traseras) anteriores al nivel de la ' +
                'articulación carpo-metacarpiana y de las posteriores a nivel de la tarso-metatarsiana; sin ' +
                'presencia de la cola, amputada hasta la última vertebra caudal. Sin vísceras cavitarias ' +
                '(excepto riñones), quedando el diafragma adherido, sin genitales y sin ubre.'},
        {id:'9',title:'Carne en canal de porcino.',content:'Cuerpo del animal sacrificado, desangrado, sin pelo, ni ' +
                'cerdas, eviscerado (pudiendo permanecer los riñones y la grasa interna), con cuero y extremidades, abierto a ' +
                'lo largo de la línea media (esterno-abdominal), sin médula espinal, separada la cabeza del cuerpo a nivel del ' +
                'cuello (articulación occipito-atloidea) y con la cabeza adherida por los tejidos blandos al resto del cuerpo.'},
        {id:'10',title:'Ciclo primavera-verano.',content:'Es el ciclo donde se registran siembras en el mes de abril y finalizan en ' +
                'septiembre del mismo año y las cosechas se registran a partir de junio y concluyen en marzo del año subsecuente.'},
        {id:'11',title:'Ciclo otoño-invierno.',content:'Es el ciclo en donde el registro de siembras inicia en octubre y termina ' +
                'en marzo del año siguiente. Las cosechas generalmente inician desde diciembre y concluyen en el mes de septiembre del año siguiente.'},
        {id:'12',title:'Ciclo vegetativo.',content:'Es la secuencia de cambios en un organismo vegetal desde su germinación hasta la producción del fruto.'},
        {id:'13',title:'Cliente.',content:'Expresión que sirve para identificar a aquellos países a los cuales México exporta el producto.'},
        {id:'14',title:'Colmena.',content:'Lugar en donde habita una colonia de abejas.'},
        {id:'15',title:'Consumo anual per cápita.',content:'Expresa la disponibilidad de un producto por habitante de un área geográfica ' +
                'determinada (país o países, región, estados, etc.) en un periodo específico. Es la cifra resultante de dividir ' +
                'entre la población de un área geográfica el saldo del volumen de producción interna, restando el volumen exportado ' +
                'y sumando el importado. No aplica para productos de consumo indirecto como oleaginosas, forrajes y ornamentos.'},
        {id:'16',title:'Cultivos cíclicos.',content:'Cultivo cuyo periodo vegetativo es menor a un año. En el país las siembras y ' +
                'cosechas de este tipo de cultivo se concentran en dos periodos: otoño-invierno y primavera-verano.'},
        {id:'17',title:'Cultivos perennes.',content:'Son aquellos cultivos cuyo ciclo vegetativo es mayor a un año, por tal razón en ' +
                'los registros administrativos se considera el mes de enero como inicio de cosecha y diciembre como el de término. ' +
                'En estos cultivos existen cuatro cultivos denominados perennes especiales, que por sus características productivas, ' +
                'comerciales y agroindustriales, se registran en periodos específicos de seguimiento estadístico y son:\n alfalfa, cacao, café cereza y caña de azúcar.'},
        {id:'18',title:'Crustáceo.',content:'Animal acuático perteneciente al filo Artrópodos; grupo principal de organismos invertebrados ' +
                'caracterizados por su exoesqueleto quitinoso y apéndices articulados; presente en aguas marinas y dulces y en tierra. Por ejemplo: cangrejos, ' +
                'langostas, ástacos, langostinos, etcétera.'},
        {id:'19',title:'Destino.',content:'Expresa el país o territorio al cual se vende parte de la producción nacional que se comercia con el resto del mundo.'},
        {id:'20',title:'Entidad federativa.',content:'Unidad geográfica mayor de la división político-administrativa del país.'},
        {id:'21',title:'Especie.',content:'Conjunto de seres que tienen uno o varios caracteres comunes. Es la unidad básica para la clasificación biológica.'},
        {id:'22',title:'Exportaciones.',content:'Es el total de productos o bienes que salen del territorio nacional de forma definitiva ' +
                'o temporal, cuyo monto puede ser expresado en términos de volumen, peso o un valor monetario.'},
        {id:'23',title:'Gruesa.',content:'Unidad de medida utilizada en algunos cultivos para cuantificar la producción de plantas ornamentales. Equivale a 144 tallos (doce docenas).'},
        {id:'24',title:'Huevo para plato.',content:'Huevo no fértil o fecundado, con destino al consumo humano o a la industrialización.'},
        {id:'25',title:'Importaciones.',content:'Es el total de productos o bienes que entran al territorio nacional de forma definitiva ' +
                'o temporal, cuyo monto puede ser expresado en términos de volumen, peso o un valor monetario.'},
        {id:'26',title:'Inventario animal.',content:'Es el número de animales que se encuentran en explotación ganadera para la obtención de ' +
                'diversos productos pecuarios en un periodo determinado. En el caso de la actividad apícola, el inventario se refiere al número de colmenares.'},
        {id:'27',title:'Mercado potencial.',content:'Es una condición de caracterización del mercado importador de un país para efectos de comercio ' +
                'exterior, la cual se establece a partir de diversos supuestos de índole comercial, estadístico, productivo o aduanal.'},
        {id:'28',title:'Modalidad hídrica.',content:'Hace referencia a las vocaciones de la superficie, ya sean de temporal o de riego.'},
        {id:'29',title:'Origen.',content:'Expresa el país o territorio de donde proceden los volúmenes de productos que el mercado nacional adquiere del exterior.'},
        {id:'30',title:'País importador y exportador.',content:'Son aquellas naciones a las cuales se exporta y de las cuales también se importa un producto específico.'},
        {id:'31',title:'Pesca.',content:'Es el acto de extraer, capturar, colectar o cultivar, por cualquier procedimiento autorizado, especies ' +
                'cuyo medio de vida total, parcial o temporal es el agua, así como los actos previos o posteriores relacionados con ella.'},
        {id:'32',title:'Perenne.',content:'Se refiere a frutales y plantaciones con vida económicamente útil de dos a 30 años, ' +
                'aunque vegetativamente hay especies con más de 50 y hasta cien años que pueden estar en producción.'},
        {id:'33',title:'Peso desembarcado.',content:'Es el volumen pesquero que conserva el producto al ser declarado al desembarque ' +
                'en sus diversas modalidades: descabezado, fileteado, desviscerado, en pulpa, rebanado u otras.'},
        {id:'34',title:'Peso vivo.',content:'Peso total pesquero del producto en el momento de obtenerse de su medio natural; se ' +
                'determina con base en el peso desembarcado, aplicando factores de conversión establecidos por el Instituto ' +
                'Nacional de la Pesca, de acuerdo con la metodología universalmente empleada por la FAO.'},
        {id:'35',title:'Precio medio al productor.',content:'El precio al productor se define como la cantidad de dinero recibida por ' +
                'el productor por cada unidad de un bien o servicio generado como producción, sin incluir el impuesto al valor ' +
                'agregado (IVA) u otro tipo de impuestos facturados al comprador. Además, dicha cotización excluye cualquier cargo de ' +
                'transporte que no estuviera incluido en el precio y tuviera que facturarse por separado.'},
        {id:'36',title:'Precio medio rural.',content:'Se define como el precio pagado al productor en la venta de primera ' +
                'mano en la zona de producción, por lo cual no incluye los apoyos económicos que a través de Programas ' +
                'de Apoyo a Productores pueda otorgar el gobierno federal o los gobiernos estatales.'},
        {id:'37',title:'Producción orgánica.',content:'Sistema de producción y procesamiento de alimentos, productos, subproductos ' +
                'animales, vegetales u otros satisfactores, con un uso regulado de insumos externos, restringiendo, y en su ' +
                'caso prohibiendo, la utilización de productos de síntesis química.'},
        {id:'38',title:'Proveedor.',content:'Expresión que sirve para identificar aquellos países de los cuales México importa el producto.'},
        {id:'39',title:'Ranking.',content:'Es un número ordinal que muestra el lugar o posición de un elemento dentro de un conjunto según ' +
                'una característica específica basada en una variable numérica después de realizar un ordenamiento.'},
        {id:'40',title:'Rendimiento.',content:'Es el resultado de la división de la producción obtenida entre la superficie cosechada.'},
        {id:'41',title:'Saldo del flujo comercial.',content:'Refiere a la cuantificación de las compras menos ventas de productos que ' +
                'efectúa un país. La balanza es superavitaria para un país cuando el total de las exportaciones es superior al ' +
                'de las importaciones; es deficitaria cuando el total de las importaciones excede al de las exportaciones.'},
        {id:'42',title:'Superficie cosechada.',content:'Es la superficie de la cual se obtuvo producción, incluyendo la que presentó siniestro parcial.'},
        {id:'43',title:'Superficie de riego.',content:'Extensión donde se realiza la aplicación artificial de agua para beneficiar a los cultivos.'},
        {id:'44',title:'Superficie de temporal.',content:'Área en que el desarrollo de los cultivos depende exclusivamente de las lluvias o de la humedad residual del suelo.'},
        {id:'45',title:'Superficie sembrada.',content:'Es la superficie agrícola en la cual se deposita la semilla o plántula de cualquier cultivo, previa preparación del suelo.'},
        {id:'46',title:'Superficie siniestrada.',content:'Es el área sembrada que en el ciclo o año agrícola registra pérdida total por afectación de ' +
                'fenómenos climáticos o por plagas y enfermedades. En el caso de perennes, se reconoce la pérdida total por siniestros con afectación ' +
                'sólo para la producción del año agrícola de que se trate, considerando que la plantación queda en posibilidad de ser cosechada en el año siguiente.'},
        {id:'47',title:'Tasa media anual de crecimiento (TMAC).',content:'Es un valor que muestra el cambio en términos porcentuales de ' +
                'una variable, aplicando un factor de sucesión temporal (años, meses, días, horas).'},
        {id:'48',title:'Temperatura.',content:'Hace referencia al grado o nivel de calor del medio ambiente y se mide en grados centígrados.'},
        {id:'49',title:'Valor de la producción.',content:'Es el valor monetario a precios corrientes de los bienes y servicios de la actividad productiva durante un periodo de referencia.'},
        {id:'50',title:'Valor de la producción agropecuaria y pesquera.',content:'Monto monetario a precios corrientes de productos generados en la actividad agrícola, pecuaria y pesquera de un periodo.'},
        {id:'51',title:'Volumen de la producción.',content:'Cantidad de productos generados en una actividad productiva durante un periodo determinado destinados al mercado y/o al autoconsumo.'},
        {id:'52',title:'Volumen de producción agropecuaria y pesquera.',content:'Cuantificación del volumen de bienes generados en la actividad ' +
                'agrícola, pecuaria y pesquera durante un periodo corriente. El volumen de productos pecuarios y pesqueros corresponden ' +
                'al del año civil, mientras que el de los productos agrícolas a las cosechas del año agrícola. Además, el volumen pesquero ' +
                'corresponde al peso vivo, y en el caso de algunos productos pecuarios como la leche de bovino y caprino, se aplicó un factor ' +
                'de conversión convencional con el fin de homologar la unidad de medida de litros a kilogramos.'},
        {id:'53',title:'Variación anual.',content:'Valor que muestra el cambio que acontece en una variable entre dos periodos, uno de ellos se establece como el de comparación o relación en porcentaje.'},
    ];

    let renderItem = ({item}) =>(
        <Fragment>
            {item.header && item.header.length?
                <Fragment><Text style={[styles.textoHeader,{color:"rgba(0,120,83,1)"}]}>{item.header}</Text><Text style={[styles.textoPrincipal,{color:"rgba(0,96,142,1)"}]}>{item.content}</Text></Fragment> :
                item.title && item.title.length?
                    <Fragment><Text style={[styles.textoPrincipal,{color:"rgba(0,96,142,1)"}]}><Text style={{fontFamily:'montserrat-700'}}>{item.title + ' '}</Text>{item.content}</Text></Fragment> :
                    item.list && item.list.length?
                        <Fragment><Text style={[styles.textoPrincipal,{color:"rgba(0,96,142,1)"}]}>{item.list}</Text><Text style={styles.tituloParticipacion}>Glosario</Text></Fragment> :
                        <Fragment></Fragment>
            }
        </Fragment>

    );

    return (
        <View style={styles.container}>
            <Text style={{padding:30}}></Text>
            <FlatList data={glosario} renderItem={renderItem} keyExtractor={item => item.id}  />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
    },
    scrollView:{
        backgroundColor:'#fff',
        width: screenWidth -15,
    },
    scrollViewContainer:{
        alignItems:'center',
    },
    tituloProducto: {
        width: screenContainer ,
        margin:20,
    },
    imagenProducto:{
        width: screenContainer,
        margin:10,
        borderRadius:10,
    },
    textoPrincipal: {
        fontFamily: "montserrat-regular",
        width: screenContainer,
        margin:10,
        textAlign:'justify',
    },
    textoHeader: {
        fontFamily: "montserrat-700",
        textAlign:'center',
    },

    imagenConsumo:{
        width: screenContainer,
        height: screenContainer,
    },
    tituloParticipacion: {
        fontFamily: "montserrat-700",
        color: "rgba(0,120,83,1)",
        width: screenContainer,
        textAlign: "center",
        fontSize: 20,
        margin:10,
    },
});

export default Ayuda;
