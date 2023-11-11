

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
    loadForm(); // Asegúrate de que loadForm se ejecute antes de acceder a las secciones del formulario
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

    form.inputs.CarreraId.change(onCarreraChange);
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
    } else {
        form.sections.SiAdeudaMaterias.removeClass('d-none');
        form.sections.NoAdeudaMaterias.addClass('d-none');
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




