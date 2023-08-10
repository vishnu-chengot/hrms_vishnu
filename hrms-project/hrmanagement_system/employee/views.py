from django.shortcuts import render

# Create your views here.


def homepage(request):
    return render(request,'employee/home.html')

def masterpage(request):
    return render(request,'employee/master.html')

def loginpage(request):
    return render(request,'employee/hrlogin.html')

def leavepage(request):
    return render(request,'employee/leave.html')

def dashboard(request):
    return render(request,'employee/dashboard.html')

def calender(request):
    return render(request,'employee/calender.html')

def attendence(request):
    return render(request,'employee/attendence.html')

def newpage(request):
    return render(request,'employee/newpage.html')

def hrsignup(request):
    return render(request,'employee/hrsignup.html')

def pending(request):
    return render(request,'employee/pending.html')  

def history(request):
    return render(request,'employee/history.html')
