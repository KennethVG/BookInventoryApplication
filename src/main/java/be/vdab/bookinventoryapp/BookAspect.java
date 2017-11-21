package be.vdab.bookinventoryapp;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

//@Component
//@Aspect
public class BookAspect {

//
//    @Before("execution(* be.vdab.bookinventoryapp.service.BookServiceImpl.findAll(..))")
//    public void loggingAdvice(JoinPoint joinPoint){
//        System.out.println("LOGGINGADVICE1: Before execution of " + joinPoint.getSignature().getName() + " method!" );
//    }
//
//
//    @Before("execution(* *.find*(..))")
//    public void loggingAdvice2(JoinPoint joinPoint){
//        System.out.println("LOGGINGADVICE2: Before execution of " + joinPoint.toLongString()+ " method!" );
//    }
//
//    @After("within(be.vdab.bookinventoryapp.service..*)")
//    public void loggingAdvice3(JoinPoint joinPoint){
//        System.out.println("Something happened in Service Package");
//    }


}
