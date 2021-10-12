from django.db.models import signals
from django.dispatch import receiver

from shortenings import utils
from shortenings.models import Shortening


@receiver(signals.post_save, sender=Shortening)
def set_expires_at(sender, instance, created, **kwargs):
    if created:
        instance.expires_at = utils.get_expiration_date(instance.created_at)
        instance.save()
