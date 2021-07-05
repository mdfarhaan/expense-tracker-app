from django.db import models

# Create your models here.

class ExpenseData(models.Model):
    title = models.CharField(max_length=200, blank=True, null=True)
    transaction = models.CharField(max_length=50, blank=True, null=True)
    amt = models.IntegerField(null=True,blank=True)
    date = models.CharField(max_length=200, blank=True, null=True)

class TotalExpenseData(models.Model):
    total = models.IntegerField(blank=True, null=False)