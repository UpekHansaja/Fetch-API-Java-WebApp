package controller;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.User;

/**
 *
 * @author upekhansaja
 */
@WebServlet(name = "X", urlPatterns = {"/X"})
public class X extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
        String name = req.getParameter("name");
        System.out.println(name);

//        try {
//            Thread.sleep(5000);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
        resp.getWriter().write("Hello " + name);
        
    }
    
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
        String name = null;
        
        Gson gson = new Gson();
//        User user =gson.fromJson(req.getReader(), classOfT)
        
        resp.getWriter().write("Name : " );
    }
    
}
