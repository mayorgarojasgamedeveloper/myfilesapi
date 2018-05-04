create table usuario (
	id			serial not null,
    usuario		varchar(20) not null unique,
    contrasena	varchar(20) not null,
    nombre		varchar(40),
    apellidoP	varchar(40),
    apellidoM	varchar(40),
    correo		varchar(50),
    curriculum	varchar(400),
    foto		varchar(100) not null default 'default',
    permisos	boolean not null default false,
    primary key(id)
);

create table log (
	id			serial not null,
    ip			varchar(20),
    accion		varchar(50),
    fecha		timestamp,
    primary key(id)
);

create table lineainovadora (
	id			serial not null,
    usuario		varchar(20),
    tipo		smallint not null, 
    -- Especializacion
    linea		varchar(50) not null,
    primary key(id)
);

create table proyecto (
	id			serial not null,
    usuario		varchar(20),
    tipo		smallint not null, 
    -- Especializacion
    nombre		varchar(50) not null,
    fecha_inicio timestamp not null,
    fecha_fin	timestamp not null,
    colaboradores varchar(200),
    instituciones varchar(200),
    primary key(id)
);

create table reporte_4 (
	id			serial not null,
    usuario		varchar(20),
    tipo		smallint not null, 
    -- Especializacion
    nombre		varchar(50) not null,
    fecha_inicio timestamp not null,
    fecha_fin	timestamp not null,
    nombre_empresa varchar(80),
    nombre_alumno varchar(80),
    primary key(id)
);

create table reporte_1 (
	id			serial not null,
    usuario		varchar(20),
    tipo		smallint not null, 
    -- Especializacion
    nombre		varchar(50) not null,
    autores		varchar(200),
    fecha		timestamp,
    linea		varchar(50) not null,
    subtipo		smallint not null,
    -- Subespecializacion
    issn		varchar(20) not null,
    nom_revista	varchar(40) not null,
    primary key(id)
);

create table reporte_2 (
	id			serial not null,
    usuario		varchar(20),
    tipo		smallint not null, 
    -- Especializacion
    nombre		varchar(50) not null,
    autores		varchar(200),
    fecha		timestamp,
    linea		varchar(50) not null,
    subtipo		smallint not null,
    -- Subespecializacion
    isbn		varchar(20) not null,
    nom_libro	varchar(40) not null,
    primary key(id)
);

create table reporte_3 (
	id			serial not null,
    usuario		varchar(20),
    tipo		smallint not null, 
    -- Especializacion
    nombre		varchar(50) not null,
    autores		varchar(200),
    fecha		timestamp,
    linea		varchar(50) not null,
    subtipo		smallint not null,
    -- Subespecializacion
    no_registro	varchar(20) not null,
    primary key(id)
);

create table informetecnico (
	id			serial not null,
    usuario		varchar(20),
    tipo		smallint not null, 
    -- Especializacion
    nombre		varchar(50) not null,
    autores		varchar(200),
    fecha		timestamp,
    linea		varchar(50) not null,
    subtipo		smallint not null,
    -- Subespecializacion
    dependencia	varchar(40) not null,
    primary key(id)
);

