from rest_framework import serializers
from .models import ExpenseData, TotalExpenseData

class ExpenseDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseData
        fields = ('id', 'title', 'transaction', 'amt', 'date')

class TotalExpenseDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = TotalExpenseData
        fields = ('id', 'total')
