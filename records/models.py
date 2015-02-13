from django.db import models

# time WorkingHour model
class WorkingHour(models.Model):
	sunday 		= models.CharField(max_length=50)
	monday 		= models.CharField(max_length=50)
	tuesday		= models.CharField(max_length=50)
	wednesday	= models.CharField(max_length=50)
	thursday	= models.CharField(max_length=50)
	friday		= models.CharField(max_length=50)
	saturday	= models.CharField(max_length=50)

	def __str__(self):
		return self.pk


class Person(models.Model):
	firstName 	= models.CharField(max_length=30)
	middleName 	= models.CharField(max_length=30,blank=True)
	lastName 	= models.CharField(max_length=30)
	age 		= models.IntegerField(default=0)
	address 	= models.CharField(max_length=50)
	sex 		= models.CharField(max_length=6)
	
	def __str__(self):
		return self.firstName + " " + self.lastName


class Patient(Person):
	bloodGroup 		= models.CharField(max_length=5)
	firstVisit 		= models.DateTimeField()
	numberOfVisits 	= models.IntegerField(default=0)

	def __str__(self):
		return self.firstName + " " + self.lastName
	

class Doctor(Person):
	dateJoined 		= models.DateTimeField()
	qualification 	= models.CharField(max_length = 100)
	specialization 	= models.CharField(max_length = 100)
	workingHour 	= models.OneToOneField(WorkingHour, null=True)

	def __str__(self):
		return self.firstName


class Staff(Person):
	dateJoined 		= models.DateTimeField()
	qualification 	= models.CharField(max_length = 100)
	workingField 	= models.CharField(max_length = 50)
	workingHour 	= models.OneToOneField(WorkingHour, null=True)
	
	def __str__(self):
		return self.firstName + " " + self.lastName

class Test(models.Model):
	date 		= models.DateTimeField()
	testType 	= models.CharField(max_length = 50)
	description = models.TextField()
	price		= models.IntegerField(default=0)
	isClear		= models.BooleanField(default=False)

	def __string__(self):
		return self.testType

class Report(models.Model):
	test = models.ForeignKey(Test)
	description = models.TextField()

	def __string__(self):
		return self.test.testType
	

class Medicine(models.Model):
	name 	= models.CharField(max_length=50)
	price 	= models.IntegerField(default=0)
	unit 	= models.CharField(max_length=50)
	
	def __string__(self):
		return self.name


class Visit(models.Model):
	patient 		= models.ForeignKey(Patient)
	date 			= models.DateTimeField()
	isFirstVisit 	= models.BooleanField(default=False) ## check whether it is first visit or not
	isFollowup 		= models.BooleanField(default=False) ## check whether the patient's visit is for followup or not
	isContinuation = models.BooleanField(default=False) ## check whether patient is visiting for last time's unfinished task
	patientProblems = models.CharField(max_length = 200)  # the problems the patient states
	problems 		= models.CharField(max_length = 500) ## the problems/illness that doctor sees
	appointmentTime = models.DateTimeField()
	appointmentDoc	= models.ForeignKey(Doctor)
	test 			= models.ForeignKey(Test, blank=True)
	report 			= models.ForeignKey(Report, blank=True)
	medicine 		= models.ManyToManyField(Medicine, blank=True)
	#medication 		= models.ForeignKey(Medication)

	def __string__(self):
		return self.date + " " + self.patient.firstName