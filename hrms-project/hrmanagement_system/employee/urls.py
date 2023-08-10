from . import views
from django.urls import path

app_name = 'employee'

urlpatterns = [
    path('home', views.homepage,name='home'),
    path('master', views.masterpage,name='master'),
    path('hrlogin', views.loginpage,name='hrlogin'),
    path('leave', views.leavepage,name='hrleave'),
    path('dashboard', views.dashboard,name='hrdashboard'),
    path('calender', views.calender,name='hrcalender'),
    path('attendence', views.attendence,name='hrattendence'),
    path('newpage', views.newpage,name='newpage'),
    path('hrsignup', views.hrsignup,name='hrsignup'),
    path('pending', views.pending,name='pending'),
    path('history', views.history,name='history'),
]