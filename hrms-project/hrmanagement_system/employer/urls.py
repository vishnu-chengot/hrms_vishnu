from . import views
from django.urls import path

app_name = 'employer'

urlpatterns = [
    path('master', views.master,name='master'),
    path('home', views.homepage,name='home'),
    path('departmentlist', views.departmentList,name='departmentlist'),
    path('positionlist', views.positionList,name='positionlist'),
    path('deleteposition/<int:pid>', views.deleteposition,name='deleteposition'),
    path('updatePos', views.updatePos,name='updatePos'),
    path('deleteDepart/<int:pid>', views.deleteDepart,name='deleteDepart'),
    path('employeelist', views.employeeList,name='employeelist'),
    path('employeeadd', views.employeeAdd,name='employeeadd'),
    path('selectPos', views.selectPos,name='selectPos'),

    
]