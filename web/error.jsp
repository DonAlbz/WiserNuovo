<%-- 
    Document   : Errore
    Created on : 13-lug-2017, 14.34.47
    Author     : Sara
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/sara_css.css">
        <title>Error page</title>
    </head>
    <body>
        <fmt:setLocale value="en"/>
        <fmt:setBundle basename="indexBundle"/> 
        <%@page isErrorPage="true" %>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid" id="container-nav">
                <div class="row">      
                    <div class="navbar-header col-xs-12 col-xs-offset-4 col-sm-offset-0 col-lg-2 col-md-2 col-sm-2">
                        <a class="navbar-brand" href="ActionServlet?op=getList"><fmt:message key="titleNavbar"/></a> 

                    </div>

                    <div class="navbar-header col-xs-12 col-sm-8 col-sm-offset-1  col-lg-8 col-md-8">

                    </div>
                </div>
            </div>

        </div>
    </div>
</nav> 
<div class="center-block" style="margin-left: 44px;">
    <br>
    <h1 class="title" >Error</h1>
    <br>
    <h4><fmt:message key="loadingErrorMessage"/>
        <I>  <%=exception%></I>.
    </h4>

</div>
</body>
</html>
