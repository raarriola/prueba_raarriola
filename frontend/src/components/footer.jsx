import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer mt-auto bg-primary py-3 d-flex flex-column">
           <Container>
               <Row>
                   <Col sm={2}>
                       
                   </Col>
                   <Col sm={2}>
                        <p className="fw-bold bg-primary fs-5">Servicios</p>
                        <ul>
                            <li><p className="bg-primary fs-6">Instalaciones</p></li>
                            <li><p className="bg-primary fs-6">Tiendas</p></li>
                            <li><p className="bg-primary fs-6">Privilegio</p></li>
                            <li><p className="bg-primary fs-6">Servicio a Empresas</p></li>
                            <li><p className="bg-primary fs-6">Bodas</p></li>
                        </ul>
                   </Col>
                   <Col sm={2}>
                        <p className="fw-bold bg-primary fs-5">Venta en línea</p>
                        <ul>
                            <li><p className="bg-primary fs-6">Retira en tienda</p></li>
                            <li><p className="bg-primary fs-6">Métodos de pago</p></li>
                            <li><p className="bg-primary fs-6">Preguntas frecuentes</p></li>
                            <li><p className="bg-primary fs-6">Privacidad y seguridad</p></li>
                            <li><p className="bg-primary fs-6">Términos y condiciones</p></li>
                        </ul>
                   </Col>
                   <Col sm={2}>
                        <p className="fw-bold bg-primary fs-5">Nuestros Valores</p>
                        <ul>
                            <li><p className="bg-primary fs-6">Sostenibilidad</p></li>
                            <li><p className="bg-primary fs-6">Garantía Total</p></li>
                            <li><p className="bg-primary fs-6">Certificación Sistema B</p></li>
                        </ul>
                   </Col>
                   <Col sm={2}>
                        <p className="fw-bold bg-primary fs-5">Grupo X</p>
                        <ul>
                            <li><p className="bg-primary fs-6">Únete a nuestro equipo</p></li>
                            <li><p className="bg-primary fs-6">Sobre nosotros</p></li>
                            <li><p className="bg-primary fs-6">Deseas ser proveedor</p></li>
                            <li><p className="bg-primary fs-6">X</p></li>
                            <li><p className="bg-primary fs-6">Bebé X</p></li>
                        </ul>
                   </Col>
                   <Col sm={2}>
                        <p className="fw-bold bg-primary fs-5">Mantente conectado</p>
                        <ul>
                            <li><p className="bg-primary fs-6">Compra por WhatsApp</p></li>
                            <li><p className="bg-primary fs-6">(502) - 1111-1111</p></li>
                            <li><p className="bg-primary fs-6">correo@correo.com</p></li>
                            <li><p className="bg-primary fs-6">Chat en linea</p></li>
                        </ul>
                   </Col>
               </Row>
           </Container>
        </footer>
    )
}

export default Footer
