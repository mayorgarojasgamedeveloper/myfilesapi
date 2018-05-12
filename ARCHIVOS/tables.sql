create table usuario (
	id			serial not null,
    usuario		varchar(20) not null unique,
    contrasena	varchar(40) not null,
    nombre		varchar(40),
    apellido		varchar(40),
    domicilio	varchar(40),
    ciudad		varchar(40),
    telefono	varchar(15),
    correo		varchar(40),
    nombre_dependiente_1		varchar(80),
    edad_dependiente_1		integer,
    nombre_dependiente_2		varchar(80),
    edad_dependiente_2		integer,
    
    foto		varchar(100) not null default 'default',
    primary key(id)
);

create table formacion (
	id			serial not null,
    usuario		varchar(20) not null,
    grado varchar(40) not null, 
    nombre varchar(40) not null, 
    institucion varchar(40) not null, 
    fecha_inicio timestamp not null, 
    fecha_fin timestamp not null, 
    fecha_obtencion timestamp not null, 
    cedula varchar(15) not null,
    primary key(id)
);

create table produccion (
	id			serial not null,
    usuario		varchar(20) not null,
    tipo varchar(40) not null, 
    titulo varchar(40) not null, 
    fecha timestamp not null, 
    autores varchar(80) not null, 
    institucion varchar(40) not null, 
    num_registro varchar(15) not null,
    primary key(id)
);

create table carga (
	id			serial not null,
    usuario		varchar(20) not null,
    nombre varchar(40) not null, 
    fecha_inicio timestamp not null, 
    fecha_fin timestamp not null, 
    autores varchar(80) not null, 
    programa varchar(40) not null, 
    horas_semana integer not null,
    primary key(id)
);

create table tutorias (
	id			serial not null,
    usuario		varchar(20) not null,
    nombre varchar(40) not null, 
    fecha_inicio timestamp not null, 
    fecha_fin timestamp not null,
    horas_semana integer not null,
    primary key(id)
);