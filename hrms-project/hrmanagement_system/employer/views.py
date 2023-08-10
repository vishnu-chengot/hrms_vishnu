from django.shortcuts import render,redirect
from .models import Department,Position,EmployeePersonalProfile,EmployeeCompanyProfile
from django.http import JsonResponse
# Create your views here.

def master(request):
    return render(request,'employer/master.html')


def homepage(request):
    return render(request,'employer/home.html')


def departmentList(request):
    department_details = Department.objects.all()
    if request.method == 'POST':
        if 'submit' in request.POST:
            department_name =request.POST['deptName']
            new_department = Department(dpartment_name = department_name)
            new_department.save()
        if 'update' in request.POST:
            updated_dep_name = request.POST['deptName']
            dep_id = request.POST['dep_id']
            department = Department.objects.get(id=dep_id)
            department.dpartment_name = updated_dep_name
            department.save()
    return render(request,'employer/departmentList.html',{'department':department_details})


def positionList(request):
    department_details = Department.objects.all()
    position_details = Position.objects.all()
    if request.method == 'POST':
        if 'submit' in request.POST:
            pos_name =request.POST['positionName']
            dep_name =request.POST['depNames']
            new_position = Position(position_name = pos_name, department_id = dep_name)
            new_position.save()
    
        if 'update' in request.POST:
            updated_pos_name = request.POST['posName']
            updated_dep_name = request.POST['posDepart']
            pos_id = request.POST['pos_id']
            position = Position.objects.get(id=pos_id)
            position.position_name = updated_pos_name
            position.department_id = updated_dep_name
            position.save()  
    return render(request,'employer/positionList.html',{'department':department_details,'position':position_details})



def deleteposition(request,pid):
    print(pid)
    Position.objects.filter(id=pid).delete()
    return redirect('employer:positionlist')



def deleteDepart(request,pid):
    print(pid)
    Department.objects.filter(id=pid).delete()
    return redirect('employer:departmentlist')

def updatePos(request):
    if request.method == 'POST':
        edit_id =request.POST['pos_id']
        if edit_id:
            position = Position.objects.filter(id=edit_id).values('position_name','department','id')
            pos_id =position[0]['id']
            p_name = position[0]['position_name']
            department_id = position[0]['department']
            
            return JsonResponse({'p_name':p_name,'department_id':department_id,'pos_id':pos_id})  
        return JsonResponse({'error': 'Invalid request'})



def employeeList(request):
    employee_personal_info = EmployeePersonalProfile.objects.all()
    employee_company_info = EmployeeCompanyProfile.objects.all()

    return render(request,'employer/employeeList.html',{'employee_personal_info':employee_personal_info,'employee_company_info':employee_company_info})

def employeeAdd(request):
    success_msg = ''
    department_details = Department.objects.all()
    position_details = Position.objects.all()
    if request.method == 'POST':
        firstName =request.POST['fname']
        lastName =request.POST['sname']
        dateBirth =request.POST['dob']
        emailID  =request.POST['email']
        contactNo =request.POST['phone']
        gender =request.POST['gender']
        permanentAddress =request.POST['permanentAdd'] 
        localAddress =request.POST['localAdress']
        empPhoto =request.FILES['pic']
        fatherName =request.POST['fatherName']
        empMotherName =request.POST['motherName']
        homeContact =request.POST['contactNumb']
        martialStatus =request.POST['maraggeStatus']
        spouseName =request.POST['spouseName']
        accountHolderName = request.POST['accountHolderName']
        accountNumber =request.POST['accountNumber']
        bankName =request.POST['bankName']
        branch =request.POST['branch']
        department_fk =request.POST['depName']
        position_fk =request.POST['posName']
        reportingManger =request.POST['reportingManger']
        dateJoining =request.POST['dateofjoin']
        basicSalary =request.POST['baseSalary']
        employeeID =request.POST['EmpId']
        Password =request.POST['confPassword']

        employeePersonalProfiles =EmployeePersonalProfile(firstName = firstName,
        lastName =lastName ,dateBirth =dateBirth,empEmail=emailID,contactNo=contactNo,
        gender =gender,permanentAddress =permanentAddress,localAddress=localAddress,
        empPhoto=empPhoto,fatherName=fatherName,motherName=empMotherName,homeContact=homeContact,
        martialStatus=martialStatus,spouseName=spouseName
        )
        employeePersonalProfiles.save()
        employeePersonalID = employeePersonalProfiles.id
        employeeCompanyProfiles = EmployeeCompanyProfile(employee_id =employeePersonalID,accountHolderName =accountHolderName,accountNumber=accountNumber,
        bankName =bankName,branch=branch,department_fk_id=department_fk,position_fk_id=position_fk,reportingManger=reportingManger,
        dateJoining=dateJoining,basicSalary=basicSalary,employeeID=employeeID,Password=Password
        )
        employeeCompanyProfiles.save()
        success_msg = 'successfully created new employee'
   
    return render(request,'employer/employeeadd.html',{'department':department_details,'position':position_details,'success_msg':success_msg})

def selectPos(request):
    if request.method == 'POST':
        dep_id =request.POST['dep_id']
        if dep_id:
            positions =Position.objects.filter(department_id = dep_id).values('position_name','id')
            positions_list = list(positions)  
            return JsonResponse(positions_list, safe=False)

