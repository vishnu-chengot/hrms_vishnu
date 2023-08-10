from django.db import models

# Create your models here.

class Department(models.Model):
    dpartment_name = models.CharField(max_length =250)

    class Meta:
        db_table = 'department_tb'


class Position(models.Model):
    department = models.ForeignKey(Department,on_delete=models.CASCADE)
    position_name = models.CharField(max_length =250)

    class Meta:
        db_table = 'position_tb'

class EmployeePersonalProfile(models.Model):
    firstName = models.CharField(max_length =250)
    lastName = models.CharField(max_length =250)
    dateBirth = models.DateField()
    empEmail = models.CharField(max_length =250)
    contactNo = models.BigIntegerField()
    gender = models.CharField(max_length=20)
    permanentAddress = models.CharField(max_length =250)
    localAddress = models.CharField(max_length =250)
    empPhoto = models.ImageField(upload_to='employee/')
    fatherName = models.CharField(max_length =250)
    motherName = models.CharField(max_length =250)
    homeContact = models.BigIntegerField()
    martialStatus = models.CharField(max_length =20)
    spouseName = models.CharField(max_length =250)


class EmployeeCompanyProfile(models.Model):
    employee = models.ForeignKey(EmployeePersonalProfile,on_delete=models.CASCADE)
    accountHolderName = models.CharField(max_length =250)
    accountNumber = models.BigIntegerField()
    bankName = models.CharField(max_length =250)
    branch = models.CharField(max_length =250)
    department_fk = models.ForeignKey(Department,on_delete=models.CASCADE)
    position_fk = models.ForeignKey(Position,on_delete=models.CASCADE)
    reportingManger = models.CharField(max_length =250)
    dateJoining = models.DateField() 
    basicSalary =models.BigIntegerField()
    employeeID = models.CharField(max_length =250)
    Password = models.CharField(max_length = 250)




