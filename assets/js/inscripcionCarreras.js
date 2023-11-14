

const form = $('.contactForm');
function loadForm(useId) {
    const inputs = form.find('input, select, textarea');
    const sections = form.find('.form-section');

    
    form.inputs = {};
    form.sections = {};

    inputs.each((i, element) => {
        console.log(element)
        form.inputs[ element.id ] = $(element);
    });

    sections.each((i, element) => {
        const id = element.id;
        const classes = element.classList;

        form.sections[id] = $(element);

        for (let j = 0; j < classes.length; j++) {
            form.sections[classes[j]] = $(element);
        }
    });
    
}

const onDocumentReady = () => {
    loadForm(); 

    
        // Agregar reglas de validación
        $.validator.addMethod("lettersonly", function (value, element) {
            return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
        }, "Solo se permiten letras");

        $.validator.addMethod("numbersonly", function (value, element) {
            return this.optional(element) || /^[0-9]+$/.test(value);
        }, "Solo se permiten números");

        $.validator.addMethod("selectcheck", function (value) {
            return value !== '0'; // Cambia '0' por el valor que representa la opción por defecto
        }, "Por favor, seleccione una opción");

        function esTituloSecundarioSeleccionado() {
            return $('input[name="TituloSecundarioRB"]:checked').val() === '1';
        }

        function esTituloSecundarioSeleccionadoFalse() {
            return $('input[name="TituloSecundarioRB"]:checked').val() === '0';
        }

        function seleccionoMayorTitulo() {
            return $("#MayorTituloObtenido").val().length > 0; // Requiere el campo si se ha seleccionado un mayor título obtenido
        }

        $("#formacionForm").validate({
            rules: {
                TituloSecundarioRB: {
                    required: true
                },
                Orientecion: {
                    required: esTituloSecundarioSeleccionado
                },

                Titulo: {
                    required: esTituloSecundarioSeleccionado
                },
                Otorgado: {
                    required: esTituloSecundarioSeleccionado
                },
                Egreso: {
                    required: esTituloSecundarioSeleccionado,
                    numbersonly: true
                },
                Promedio: {
                    required: esTituloSecundarioSeleccionado,
                    numbersonly: true
                },
                AdeudaMaterias: {
                    required: esTituloSecundarioSeleccionadoFalse,
                    min: 1,
                    max: 3
                },
                CualesMaterias: {
                    required: esTituloSecundarioSeleccionadoFalse,
                    lettersonly: true
                },

                MayorTitulo: {
                    required: seleccionoMayorTitulo,
                    lettersonly: true
                },
                OtorgadoMayorTitulo: {
                    required: seleccionoMayorTitulo
                },
                MayorTituloPromedio: {
                    required: seleccionoMayorTitulo,
                    numbersonly: true
                }


                
            },
            messages: {
                TituloSecundarioRB: {
                    required: "Por favor, selecciona una opción para el Titulo Secundario"
                },
                Orientecion: {
                    required: "Por favor, ingresa la orientación"
                },
                Titulo: {
                    required: "Por favor, ingresa el titulo"
                },
                Otorgado: {
                    required: "Por favor, ingresa por quien fue otorgado"
                },
                Egreso: {
                    required: "Por favor, ingrese el año de egreso"
                },
                Promedio: {
                    required: "Por favor, ingrese el promedio"
                },
                AdeudaMaterias: {
                    required: "Por favor, ingrese la cantidad de materias",
                    min: "Ingrese un valor igual o mayor a 1",
                    max: "Solo se permite hasta 3 materias"
                },
                MayorTitulo: {
                    required: "Por favor, ingese el nombre del titulo"
                },
                OtorgadoMayorTitulo: {
                    required: "Por favor, ingese quien se lo otorgo"
                },
                MayorTituloPromedio:{
                    required: "Por favor, ingese el promedio"
                }

                
            },
            
        });
           

        // Configurar validación
        $("#datosForm").validate({
            rules: {
                CarreraId: {
                    required: true,
                    selectcheck: true
                },

                Apellido: {
                    required: true,
                    lettersonly: true,
                    minlenght: 3,
                    maxlength: 15
                },
                Nombre: {
                    required: true,
                    lettersonly: true,
                    minlenght: 3,
                    maxlength: 15
                },
                TipoDocumentoId: {
                    required: true,
                    selectcheck: true

                },

                fechaNacimiento: {
                    required: true
                },

                EstadoCivilId: {
                    required: true,
                    selectcheck: true
                },

                PaisNacimiento: {
                    required: true,
                    selectcheck: true
                },
                Documento: {
                    required: true,
                    numbersonly: true,
                    minlenght: 8,
                    maxlength: 8
                },
                Sexo: {
                    required: true,
                    selectcheck: true

                },
                Calle: {
                    required: true,
                    minlenght: 5,
                    maxlength: 20
                },

                Provincia: {
                    required: true,
                    selectcheck: true
                },

                Localidad: {
                    required: true,
                    selectcheck: true 
                },
                NumeroCalle: {
                    required: true,
                    numbersonly: true,
                    minlenght: 4,
                    maxlength: 8
                },
                Distrito: {
                    required: true,
                    minlenght: 4,
                    maxlength: 15,
                },
                CodigoPostal: {
                    required: true,
                    numbersonly: true,
                    minlenght: 4,
                    maxlength: 4
                },
                Telefono: {
                    required: true,
                    numbersonly: true
                },
                Celular: {
                    required: true,
                    numbersonly: true
                },
                Email: {
                    required: true
                }

                // Agrega más reglas según sea necesario para otros campos
            },
            messages: {
                CarreraId: {
                    required: "Por favor, selecciona una carrera",
                    selectcheck: "Por favor, selecciona una opción válida"
                },

                Apellido: {
                    required: "Por favor, ingrese su apellido",
                    minlength: "El Apellido debe tener al menos 3 letras",
                    maxlength: "El Apellido no puede tener más de 15 letras",
                },
                Nombre: {
                    required: "Por favor, ingrese su nombre",
                    minlength: "El Nombre debe tener al menos 3 letras",
                    maxlength: "El Nombre no puede tener más de 15 letras",
                },
                TipoDocumentoId:{
                    required: "Por favor, selecciona una opcion valida",
                    selectcheck: "Por favor, seleccione una opción",
                },
                Documento: {
                    required: "Por favor, ingrese su número de documento",
                    minlength: "El Documento debe tener al menos 8 numeros",
                    maxlength: "El Documento no puede tener más de 8 numeros",
                },

                fechaNacimiento: {
                    required: "Por favor, ingrese su fecha de nacimiento"
                },

                Calle: {
                    required: "Por favor, ingrese su calle",
                    minlength: "La Calle debe tener al menos 5 numeros",
                    maxlength: "La Calle no puede tener más de 10 numeros",
                    
                },

                NumeroCalle: {
                    required: "Por favor, ingrese su numero de calle",
                    minlength: "El Numero de calle debe tener al menos 4 numeros",
                    maxlength: "El Numero de calle  no puede tener más de 8 numeros",
                },

                Distrito: {
                    required:  "Por favor, ingrese su distrito",
                    minlength: "El Distrito debe tener al menos 4 letras",
                    maxlength: "El Distrito no puede tener más de 15 letras",
                },

                CodigoPostal: {
                    required: "Por favor, ingrese su codigo postal",
                    minlength: "El Codigo postal debe tener al menos 4 numeros",
                    maxlength: "El Codigo postal no puede tener más de 4 numeros",
                },

                Telefono: {
                    required: "Por favor, ingrese su telefono",
                },

                Celular: {
                    required: "Por favor, ingrese su celular",
                },

                Email: {
                    required: "Por favor, ingrese su email",
                }

                // Agrega más mensajes según sea necesario para otros campos
            },
            // Otras opciones y funciones según tus necesidades
            // Puedes seguir la estructura que proporcioné anteriormente para personalizar la ubicación de los mensajes de error, por ejemplo.
        });
    
    


    const NoAdeudaMaterias = $('#NoAdeudaMaterias');
    const SiTrabaja = $('#SiTrabaja');
    const RealizaLecturasFrecuentes = $('#RealizaLecturasFrecuentes');
    const UsaInternet = $('#UsaInternet');
    const UsaRedes = $('#UsaRedes');
    const FamiliaresACargo = $('#FamiliaresACargo');


    
    
    form.sections.NoAdeudaMaterias.addClass('d-none');
    form.sections.SiTrabaja.addClass('d-none');
    form.sections.RealizaLecturasFrecuentes.addClass('d-none');
    form.sections.FamiliaresACargo.addClass('d-none');
    form.sections.UsaRedes.addClass('d-none');
    form.sections.UsaInternet.addClass('d-none');

   

    
    


    form.inputs.TituloSecundarioSI.change(onTituloSecundarioChange);
    form.inputs.TituloSecundarioNO.change(onTituloSecundarioChange);

    form.inputs.TrabajaSi.change(onSiTrabajaChange);
    form.inputs.TrabajaNo.change(onSiTrabajaChange);

    form.inputs.SiViveSolo.change(onViveConAlquienChange);
    form.inputs.NoViveSolo.change(onViveConAlquienChange);

    form.inputs.SiFamiliaresACargo.change(onSiFamiliaresAcargo);
    form.inputs.NoFamiliaresACargo.change(onSiFamiliaresAcargo);

    form.inputs.SiLecturasFrecuentes.change(onRealizaLecturasFrecuentes);
    form.inputs.NoLecturasFrecuentes.change(onRealizaLecturasFrecuentes);

    form.inputs.SiUsaRedes.change(onUsaRedesChange);
    form.inputs.NoUsaRedes.change(onUsaRedesChange);

    form.inputs.SiUsaInternet.change(onUsaInternetChange);
    form.inputs.NoUsaInternet.change(onUsaInternetChange);

    
}


const onCarreraChange = (event) => {
    const selectedCarrera = form.inputs.CarreraId.val();
    console.log(selectedCarrera);
    

    // Oculta todas las secciones de materias
    form.sections.materiasProgramacionPrimero.addClass('d-none');
    
    
    
    


    // Muestra la sección correspondiente a la carrera seleccionada
    if (selectedCarrera === '5') {
        form.sections.materiasProgramacionPrimero.removeClass('d-none');
        
        

    } else if (selectedCarrera === '3') {
        // Agrega lógica para otras carreras si es necesario
         form.sections.materiasPublicaPrimero.removeClass('d-none');
    }
    // Repite el patrón para otras carreras si es necesario
}

const onUsaInternetChange = (event) => {
    if(event.target.id === 'SiUsaInternet'){
        form.sections.UsaInternet.removeClass('d-none');
    } else {
        form.sections.UsaInternet.addClass('d-none');
    }
}

const onUsaRedesChange = (event) => {
    if(event.target.id === 'SiUsaRedes'){
        form.sections.UsaRedes.removeClass('d-none');
    } else {
        form.sections.UsaRedes.addClass('d-none');
    }
}

const onTituloSecundarioChange = (event) => {
    if(event.target.id === 'TituloSecundarioSI') {
        form.sections.SiAdeudaMaterias.addClass('d-none');
        form.sections.NoAdeudaMaterias.removeClass('d-none');
        form.sections.NoAdeudaMaterias_mid.removeClass('d-none');
    } else {
        form.sections.SiAdeudaMaterias.removeClass('d-none');
        form.sections.NoAdeudaMaterias.addClass('d-none');
        form.sections.NoAdeudaMaterias_mid.addClass('d-none');
    }
}

const onSiTrabajaChange = (event) => {
    if(event.target.id === 'TrabajaSi'){
        
        form.sections.SiTrabaja.removeClass('d-none');
    } else {
       
        form.sections.SiTrabaja.addClass('d-none');
    }
}

const onViveConAlquienChange = (event) => {
    if(event.target.id === 'NoViveSolo'){
        form.sections.ConQuienVive.removeClass('d-none');
    } else {
        form.sections.ConQuienVive.addClass('d-none');
    }
}

const onSiFamiliaresAcargo = (event) => {
    if(event.target.id === 'SiFamiliaresACargo'){
        form.sections.FamiliaresACargo.removeClass('d-none');
    } else {
        form.sections.FamiliaresACargo.addClass('d-none');
    }
}

const onRealizaLecturasFrecuentes = (event) => {
    if(event.target.id === 'SiLecturasFrecuentes'){
        form.sections.RealizaLecturasFrecuentes.removeClass('d-none');
    } else {
        form.sections.RealizaLecturasFrecuentes.addClass('d-none');
    }
}

$(document).ready(onDocumentReady);




