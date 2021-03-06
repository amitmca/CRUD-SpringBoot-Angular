/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.perpustakaan;

import com.perpustakaan.services.AdminService;
import com.perpustakaan.services.AnggotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;

/**
 *
 * @author MICI
 */

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
    
    @Autowired
    private AdminService adminService;
    @Autowired
    private AnggotaService anggotaService;
    
    @Autowired
    public void confidAuthentication(AuthenticationManagerBuilder auth) throws Exception{
        auth.userDetailsService(adminService);
        auth.userDetailsService(anggotaService);
       
    }
    
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.addFilterBefore(new CorsFilter(), ChannelProcessingFilter.class);
        http.authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers(HttpMethod.POST, "/api/anggota/register").permitAll()
                .antMatchers(HttpMethod.POST, "/api/anggota/login").permitAll()
                .antMatchers(HttpMethod.POST, "/api/admin/register").permitAll()
                .antMatchers(HttpMethod.POST, "/api/admin/login").permitAll()      
                .anyRequest().fullyAuthenticated()
                .and()
                .httpBasic()
                .and()
                .csrf().disable();
    }
    
}


