from django.utils import timezone

from core import celery_app
from shortenings import consts
from shortenings.models import Shortening


@celery_app.task
def delete_expired_shortenings():
    Shortening.objects.filter(expires_at__lt=timezone.now()).delete()


celery_app.add_periodic_task(
    consts.SHORTENING_CLEAN_INTERVAL, delete_expired_shortenings.s(),
)
