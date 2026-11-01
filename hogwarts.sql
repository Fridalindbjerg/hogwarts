--
-- PostgreSQL database dump
--

\restrict IIXvOvJ1Nh07pslBx9JWR3lXi4oRI7qrmvzeT1L4rYEQLAH0A6Y6vifbyRaLnrV

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-11-01 22:34:14 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16513)
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying NOT NULL,
    teacher character varying NOT NULL,
    students character varying NOT NULL
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16512)
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.courses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 225 (class 1259 OID 16547)
-- Name: houses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.houses (
    id integer NOT NULL,
    name character varying NOT NULL,
    color character varying NOT NULL,
    founder character varying NOT NULL
);


ALTER TABLE public.houses OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16536)
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    id integer NOT NULL,
    name numeric NOT NULL,
    year character varying NOT NULL,
    house character varying NOT NULL
);


ALTER TABLE public.students OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16535)
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.students ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.students_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 16525)
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying NOT NULL,
    house character varying NOT NULL
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16524)
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.teachers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.teachers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3840 (class 0 OID 16513)
-- Dependencies: 220
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3845 (class 0 OID 16547)
-- Dependencies: 225
-- Data for Name: houses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.houses VALUES (2, 'hus2', 'grøn', 'lin');
INSERT INTO public.houses VALUES (1, 'house', 'blå', 'my');


--
-- TOC entry 3844 (class 0 OID 16536)
-- Dependencies: 224
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3842 (class 0 OID 16525)
-- Dependencies: 222
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (1, 'frida', 'hus');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (2, 'fridaikketest', 'house2');


--
-- TOC entry 3851 (class 0 OID 0)
-- Dependencies: 219
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 1, false);


--
-- TOC entry 3852 (class 0 OID 0)
-- Dependencies: 223
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_id_seq', 1, false);


--
-- TOC entry 3853 (class 0 OID 0)
-- Dependencies: 221
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_id_seq', 3, true);


--
-- TOC entry 3685 (class 2606 OID 16523)
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- TOC entry 3691 (class 2606 OID 16557)
-- Name: houses houses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);


--
-- TOC entry 3689 (class 2606 OID 16546)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- TOC entry 3687 (class 2606 OID 16534)
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


-- Completed on 2026-11-01 22:34:14 CET

--
-- PostgreSQL database dump complete
--

\unrestrict IIXvOvJ1Nh07pslBx9JWR3lXi4oRI7qrmvzeT1L4rYEQLAH0A6Y6vifbyRaLnrV

